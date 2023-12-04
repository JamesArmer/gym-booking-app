run:
	yarn start:dev

up:
	docker compose up -d

down:
	docker ps -aq | xargs docker stop | xargs docker rm
	docker volume prune -a -f

reset:
	docker system prune -a -f