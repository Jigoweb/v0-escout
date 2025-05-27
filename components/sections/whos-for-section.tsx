// Who's For Section component
import { User, Users, CalendarDays, Newspaper } from 'lucide-react';

export default function WhosForSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The Platform for All Esports Actors
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Escout tailors your experience, offering specialized features and insights based on your unique role in the esports ecosystem. Discover how we empower every player, team, organizer, and enthusiast.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {
            [
              {
                title: "Player",
                description: "Your an aspiring or professional player wanting to get better visibility on the landscape",
                icon: <User className="w-5 h-5 text-primary" />
              },
              {
                title: "Team",
                description: "You're a team manager wanting to manage its roaster ans palmarès.",
                icon: <Users className="w-5 h-5 text-primary" />
              },
              {
                title: "Organizer",
                description: "You're a licensed tournament organizer wanting to promote competitive events.",
                icon: <CalendarDays className="w-5 h-5 text-primary" />
              },
              {
                title: "Other",
                description: "For journalists and esports enthusiasts wanting to stay updated with market insights.",
                icon: <Newspaper className="w-5 h-5 text-primary" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-card-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-3 p-2 bg-primary/10 rounded-md">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}