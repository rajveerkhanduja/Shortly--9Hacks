"use client";
import { db } from '@/configs/db';
import { useUser } from '@clerk/nextjs';
import { Users } from '@/configs/schema'; // Correct import
import React, { useEffect } from 'react';
import { eq } from 'drizzle-orm';

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    user && isNewUser();
  }, [user]);

  const isNewUser = async () => {
    const result = await db.select().from(Users) // Use `User` instead of `users`
      .where(eq(Users.email, Users?.primaryEmailAddress?.emailAddress));
    
    console.log(result);
    
    if (!result[0]) {
      await db.insert(Users).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
      });
    }
  };

  return <div>{children}</div>;
}

export default Provider;
