# Build stage
FROM maven:3.9.6-eclipse-temurin-21 AS build
COPY . .
RUN mvn clean package -DskipTests

# Run stage
FROM eclipse-temurin:21-jdk-slim
COPY --from=build /target/Entrepaginas-0.0.1-SNAPSHOT.war demo.war
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.war"]
