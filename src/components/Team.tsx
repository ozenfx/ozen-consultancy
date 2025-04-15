
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in business transformation, Sarah leads our team with vision and expertise.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    fallback: "SJ"
  },
  {
    name: "David Chen",
    role: "Operations Director",
    bio: "David specializes in streamlining complex business operations and implementing efficient systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    fallback: "DC"
  },
  {
    name: "Amara Patel",
    role: "Finance Consultant",
    bio: "Amara brings her wealth of experience in financial analysis and strategic planning to every client project.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
    fallback: "AP"
  },
  {
    name: "Michael Torres",
    role: "Marketing Strategist",
    bio: "Michael helps businesses build their brand and reach their target audience with innovative strategies.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    fallback: "MT"
  }
];

const Team = () => {
  return (
    <section id="team" className="bg-muted/50 section-padding">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Leadership Team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the experienced professionals behind Ozen Consultancy who are dedicated to your business success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-card border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-2">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg font-medium">
                    {member.fallback}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
