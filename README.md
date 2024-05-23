# keycloak-labs

### OpenId- OpenID Connect Playground
![OpenId.png](images%2FOpenId.png)

 runs in port 8001
### Oauth 2.0 - OAuth 2.0 Playground
![Oauth.png](images%2FOauth.png)

runs in port 8000

```
npm run start
```

you can configure your Keycloak instance running below commands


```
docker pull quay.io/keycloak/keycloak:23.0.6
```

```
 docker run -d -p 8080:8080 \
    -e KEYCLOAK_ADMIN=admin \
    -e KEYCLOAK_ADMIN_PASSWORD=admin \
    -e KC_PROXY=edge \
    --restart always \
    -v ~/projects/bo/:/opt/jboss/keycloak/standalone/data \
    quay.io/keycloak/keycloak:23.0.6 start-dev
```

experiment and enjoy