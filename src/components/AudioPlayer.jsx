import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc3, Upload } from 'lucide-react';

export const AudioPlayer = ({ autoPlayTrigger = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  // High-fidelity wedding audio source (served locally from public folder, zero distortion!)
  const [audioSource, setAudioSource] = useState('/audio/wedding-melody.mp3');

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioSource);
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
    } else {
      audioRef.current.src = audioSource;
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [audioSource]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // Smooth fade-out before pause
      let currentVol = audioRef.current.volume;
      const fadeInterval = setInterval(() => {
        if (currentVol > 0.05) {
          currentVol -= 0.05;
          audioRef.current.volume = Math.max(0, currentVol);
        } else {
          clearInterval(fadeInterval);
          audioRef.current.pause();
          audioRef.current.volume = volume;
          setIsPlaying(false);
        }
      }, 30);
    } else {
      audioRef.current.volume = 0;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            // Smooth fade-in to target volume
            let currentVol = 0;
            const fadeInterval = setInterval(() => {
              if (currentVol < volume) {
                currentVol += 0.05;
                audioRef.current.volume = Math.min(volume, currentVol);
              } else {
                clearInterval(fadeInterval);
              }
            }, 30);
          })
          .catch((err) => {
            console.warn("Autoplay prevented by browser:", err);
            setIsPlaying(false);
          });
      }
    }
  };

  // Triggered when wax seal envelope is opened
  useEffect(() => {
    if (autoPlayTrigger && !isPlaying && audioRef.current) {
      togglePlay();
    }
  }, [autoPlayTrigger]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Allow couple to choose a custom wedding song if desired
  const handleCustomFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const customUrl = URL.createObjectURL(file);
      setAudioSource(customUrl);
      setIsPlaying(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => {});
        }
      }, 100);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-5 sm:left-5 z-40 flex items-center gap-2">
      <div className="relative">
        {/* Main Audio Button */}
        <button
          onClick={togglePlay}
          title={isPlaying ? "Mute Shehnai Music" : "Play Wedding Shehnai & Sitar Melody"}
          className="group relative flex items-center gap-2.5 bg-[#FAF7F0]/95 hover:bg-white backdrop-blur-md border-2 border-gold/70  sm:px-4 sm:py-2.5 rounded-full shadow-royal transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Animated vinyl / soundwave icon */}
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <Disc3 className="w-5 h-5 text-[#8B1E2B] animate-spin" style={{ animationDuration: '4s' }} />
            ) : (
              <VolumeX className="w-4 h-4 text-[#30251F]/70 group-hover:text-[#8B1E2B] transition-colors" />
            )}
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#8B1E2B]  leading-none">
              {isPlaying ? 'Now Playing' : 'Wedding Music'}
            </span>
            {/* <span className="text-[11px] font-serif text-[#241A15] font-semibold leading-tight mt-0.5">
              {isPlaying ? 'Shehnai & Sitar' : 'Play Melody'}
            </span> */}
          </div>

          {/* Pulsing indicator when playing */}
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-3 w-3 ml-1 mb-0.5">
              <span className="w-0.5 bg-[#8B1E2B] animate-bounce h-2" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 bg-[#8B1E2B] animate-bounce h-3" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 bg-[#8B1E2B] animate-bounce h-1.5" style={{ animationDelay: '300ms' }} />
            </div>
          )}
        </button>

        {/* Hidden File Input for Custom Song upload */}
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={handleCustomFileChange}
        />
      </div>
    </div>
  );
};
