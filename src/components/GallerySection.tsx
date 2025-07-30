import { useState } from "react";
import { X } from "lucide-react";
import trainingDribbling from "@/assets/training-dribbling.jpg";
import teamCelebration from "@/assets/team-celebration.jpg";
import coachDemonstrating from "@/assets/coach-demonstrating.jpg";
import trainingGames from "@/assets/training-games.jpg";
import groupTrophies from "@/assets/group-trophies.jpg";
import goalPractice from "@/assets/goal-practice.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: trainingDribbling,
      alt: "Kids practicing dribbling skills",
      title: "Dribbling Skills"
    },
    {
      src: teamCelebration,
      alt: "Team celebrating after scoring",
      title: "Team Celebration"
    },
    {
      src: coachDemonstrating,
      alt: "Coach demonstrating techniques",
      title: "Learning Together"
    },
    {
      src: trainingGames,
      alt: "Fun training games and activities",
      title: "Training Games"
    },
    {
      src: groupTrophies,
      alt: "Group photo with trophies",
      title: "Achievement Celebration"
    },
    {
      src: goalPractice,
      alt: "Goal scoring practice",
      title: "Goal Practice"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">Training in Action</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See our young footballers developing their skills and having fun in our supportive training environment!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-custom hover-lift cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;