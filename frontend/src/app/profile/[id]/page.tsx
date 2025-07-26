"use client";

import { ProfileProps, TicketProps } from "@/types/user/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon, Calendar } from "lucide-react";
import { useUserStore } from "@/store/user";
import styles from "./page.module.scss";

const fetchUser = async (id: string) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

const fetchUserTickets = async (id: string) => {
  const { data } = await api.get(`/users/${id}/tickets`);
  return data;
};

export default function Profile({ params }: ProfileProps) {
  const { id } = params;

  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
  });

  const {
    data: tickets,
    isLoading: ticketsLoading,
    isError: ticketsError,
  } = useQuery({
    queryKey: ["tickets", id],
    queryFn: () => fetchUserTickets(id),
  });

  const setRoles = useUserStore((state) => state.setRoles);

  if (user && user.roles) {
    setRoles(
      {
        isAdmin: user.roles.includes("admin"),
        isOrganizer: user.roles.includes("organizer"),
      },
      user.roles.includes("admin"),
    );
  }

  if (userLoading || ticketsLoading) return <div>Loading...</div>;
  if (userError || !user) return <div>Error loading user.</div>;
  if (ticketsError || !tickets) return <div>Error loading tickets.</div>;

  return (
    <main className={styles.page}>
      <div className={styles.page__container}>
        <ProfileHeader
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          address={user.address}
          isAdmin={user.roles.includes("admin")}
          isOrganizer={user.roles.includes("organizer")}
        />

        <section className={styles.events}>
          <h2 className={styles.events__title}>Bought tickets</h2>
          <p className={styles.events__text}>
            Here you find your bought tickets
          </p>

          {tickets.length === 0 ? (
            <p>No tickets found.</p>
          ) : (
            tickets.map((ticket: any) => (
              <TicketCard
                key={ticket.id}
                title={ticket.title}
                description={ticket.description}
                location={ticket.location}
                date={ticket.date}
              />
            ))
          )}
        </section>
      </div>
    </main>
  );
}

const UserBadges = ({
  isAdmin,
  isOrganizer,
}: {
  isAdmin: boolean;
  isOrganizer: boolean;
}) => (
  <div className={styles.badges}>
    <Badge variant="default" className={styles.profile__badge}>
      <BadgeCheckIcon />
      Verified
    </Badge>

    {isAdmin && (
      <Badge
        variant="default"
        className={`${styles.profile__badge} ${styles.profile__badge_admin}`}
      >
        <BadgeCheckIcon />
        Admin
      </Badge>
    )}

    {isOrganizer && (
      <Badge
        variant="default"
        className={`${styles.profile__badge} ${styles.profile__badge_organizer}`}
      >
        <BadgeCheckIcon />
        Organizer
      </Badge>
    )}
  </div>
);

const ProfileHeader = ({
  firstName,
  lastName,
  email,
  address,
  isAdmin,
  isOrganizer,
}: {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  isAdmin: boolean;
  isOrganizer: boolean;
}) => (
  <div className={styles.profile}>
    <Avatar className={styles.profile__image}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>{`${firstName} ${lastName}`}</AvatarFallback>
    </Avatar>

    <div className={styles.profile__content}>
      <UserBadges isAdmin={isAdmin} isOrganizer={isOrganizer} />
      <h1 className={styles.profile__title}>{`${firstName} ${lastName}`}</h1>
      <p className={styles.profile__text}>{`${address}, ${email}`}</p>
    </div>
  </div>
);

const TicketCard = ({ title, description, location, date }: TicketProps) => (
  <div className={styles.card}>
    <h2 className={styles.card__title}>{title}</h2>
    <p className={styles.card__text}>{description}</p>
    <div className={styles.card__content}>
      <p className={styles.card__text}>{location}</p>
      <p className={styles.card__text}>
        <Calendar className={styles.card__icon} />
        {date}
      </p>
    </div>
  </div>
);
