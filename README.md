// migration db 
"docker exec -it scoring-ielts-user-service-1 sh"
"npx prisma migrate dev --name init"