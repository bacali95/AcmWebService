FROM maven:3.5-jdk-8 AS build  
COPY . /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean install

FROM gcr.io/distroless/java  
COPY --from=build /usr/src/app/backend/target/AcmWebService.war /usr/app/app.war
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/app/app.war"]  
  

