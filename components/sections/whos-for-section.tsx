"use client"

import Image from 'next/image'

export default function WhosForSection() {
  const cards = [
    {
      title: 'PLAYER',
      description: 'You’re an aspiring or professional player wanting to get better visibility on the landscape.',
      image: '/images/cards/player_box.jpg',
    },
    {
      title: 'TEAM',
      description: 'You’re a team manager wanting to manage its roster and palmarès.',
      image: '/images/cards/team_box.jpg',
    },
    {
      title: 'ORGANIZER',
      description: 'You’re a licensed tournament organizer wanting to promote competitive events.',
      image: '/images/cards/organizer_box.jpg',
    },
    {
      title: 'OTHER',
      description: 'For journalists and esports enthusiasts wanting to stay updated with market insights.',
      image: '/images/cards/other_box.jpg',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <a href="https://escout.gg" className="inline-block text-[#5ec8ff] font-medium tracking-[0.15em] text-sm uppercase mb-6 hover:opacity-80 transition-opacity">
            ESCOUT.GG
          </a>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase mb-6 leading-[0.9]">
            The Platform for All Esports Actors
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Escout tailors your experience, offering specialized features and insights based on your unique role in the esports ecosystem.
            <br className="hidden md:block" />
            Discover how we empower every player, team, organizer, and enthusiast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl transition-transform hover:-translate-y-1 duration-300"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                priority={true}
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-between py-8 px-6">
                {/* Top: Title */}
                <div className="mt-2">
                  <h3 className="text-[#60e7ff] text-4xl md:text-5xl font-black uppercase text-center drop-shadow-lg">
                    {card.title}
                  </h3>
                </div>

                {/* Bottom: Description */}
                <div className="mb-4 w-full">
                  <p className="text-white text-center text-sm md:text-base font-medium leading-snug drop-shadow-md max-w-[240px] mx-auto">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
