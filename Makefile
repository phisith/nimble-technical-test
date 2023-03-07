.PHONY: test build start-dev down-dev start-prod down-prod migrate-dev

test:
	docker ps

build:
	docker-compose -f docker-compose.yml build $(c)
	docker-compose -f docker-compose.yml up -d $(c)
	docker-compose -f docker-compose.yml down -v $(c)

start-dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d $(c) && \
	docker exec -it nimble-technical-test-backend-1 /bin/sh -c "npx prisma migrate dev --name init"
down-dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v $(c)
start-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d $(c) && \
	docker exec -it nimble-technical-test-backend-1 /bin/sh -c "npx prisma migrate dev --name init"
down-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v $(c)

migrate-dev:
	docker exec -it nimble-technical-test-backend-1 /bin/sh -c "npx prisma migrate dev --name init"