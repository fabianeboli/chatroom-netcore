FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ./*.csproj ./
RUN dotnet restore 

# install npm
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm                       # note this one

# Copy everything else and build
COPY ./ .
RUN dotnet publish -c release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim
WORKDIR /app
COPY --from=build-env /app/out .
# Run the app on container startup
# Use your project name for the second parameter
# e.g. ChatApp.dll
CMD ASPNETCORE_URLS=http://*:$PORT dotnet ChatApp.dll