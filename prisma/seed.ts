// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear un Tenant
  const tenant = await prisma.tenant.create({
    data: {
      name: 'Tenant Principal',
    },
  });

  // Crear un User relacionado
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: 'securepassword123',
      telephone: '123456789',
      role: 'ADMIN',
    },
  });

  await prisma.user.create({
    data: {
      email: 'user@example.com',
      name: 'Regular User',
      password: 'userpassword',
      telephone: '987654321',
      role: 'USER',
    },
  });
}

main()
  .then(() => {
    console.log('✅ Seed completado.');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
