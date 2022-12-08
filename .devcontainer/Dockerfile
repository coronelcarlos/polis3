FROM mcr.microsoft.com/devcontainers/typescript-node:16-bullseye

ARG USER_UID=1000
ARG USER_GID=$USER_UID
RUN if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ]; then groupmod --gid $USER_GID node && usermod --uid $USER_UID --gid $USER_GID node; fi

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends libusb-dev libudev-dev libusb-1.0-0-dev

# [Optional] Uncomment if you want to install more global node modules
RUN su node -c "npm install -g truffle @celo/celocli"

ENV NO_SYNCCHECK true