FROM gitpod/workspace-full

USER gitpod

RUN bash -c ". /home/gitpod/.sdkman/bin/sdkman-init.sh && \
    sdk install java 17.0.5-oracle -y && \
    sdk default java 17.0.5-oracle && \
    npm install -g @angular/cli" 