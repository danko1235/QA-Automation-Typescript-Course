FROM ubuntu:20.04
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN apt-get update
RUN apt-get install -y curl git

RUN mkdir /usr/local/nvm
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 20.18.1
RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm use $NODE_VERSION

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
ENV PATH $NVM_DIR:$PATH

RUN node -v
RUN npm -v

WORKDIR /usr/src/app
RUN git clone https://github.com/AhmedShaykh/Expense-Tracker-App-With-React.JS.git
WORKDIR /usr/src/app/Expense-Tracker-App-With-React.JS
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000
