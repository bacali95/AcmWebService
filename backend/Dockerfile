FROM openjdk:8-jdk as build-stage

WORKDIR /work

COPY ./ /work/

RUN ./mvnw clean install -DskipTests -Dmaven.test.skip=true -DargLine="-Xmx2048m"

FROM openjdk:8-jre-alpine

COPY --from=build-stage /work/target/app.war /root/app.war

EXPOSE 8080

ENTRYPOINT ["java","-jar","/root/app.war"]