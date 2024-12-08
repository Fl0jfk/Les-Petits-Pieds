"use client";

import Image from "next/image";

interface TeamMember {
  id: string;
  pp?: string;
  firstname: string;
  lastname: string;
  graduate?: string;
}

interface PersonalListProps {
  team: TeamMember[];
}

export default function PersonalList({ team }: PersonalListProps) {
  return (
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-black">
        {team.map((member) => (
          <div key={member.id} className="p-4 bg-white rounded-xl text-center">
            <div className="mb-4">
              {member.pp ? (
                <Image src={member.pp} alt={`${member.firstname} ${member.lastname}`} width={96} height={96} className="w-24 h-24 rounded-full mx-auto"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl text-gray-500">?</span>
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold">{member.firstname} {member.lastname}</h3>
            <p className="text-gray-600 italic">{member.graduate || "—"}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
