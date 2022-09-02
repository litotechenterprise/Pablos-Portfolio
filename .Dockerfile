
FROM Node:aphine

COPY ./package.json .


COPY . . 


RUN ["npm" "run" "start"]