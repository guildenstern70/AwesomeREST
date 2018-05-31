# Awesome REST

## Usage:

Ask for token with login (input: email, fiscalcode, password)

    curl -X POST \
    https://cf-fakeagid-restapi.eu-de.mybluemix.net/api/AppUsers/login \
    -H 'Content-Type: application/json' \
    -d '{
      "email": "alessio.saltarin@fakepagopa.it",
      "fiscalcode": "SLTLSS70M26F205X",
      "password": "doctor"
    }'

You receive token ("id")

    {
        "id": "W3pwN5ggThYHZCpgyTBE8Uzp96QjDGrMxFcIU5C3rRYBbxJDWl240K4AA6xx8FVG",
        "ttl": 1209600,
        "created": "2018-05-31T12:27:37.041Z",
        "userId": 2
    }

With token, you get resources, ie: wallets (for authenticated user):

    curl -X GET \
      'https://cf-fakeagid-restapi.eu-de.mybluemix.net/api/AppUsers/me/wallets?access_token=W3pwN5ggThYHZCpgyTBE8Uzp96QjDGrMxFcIU5C3rRYBbxJDWl240K4AA6xx8FVG'

Notice that you call service using "me" vanity code:

    /AppUsers/me/wallets

#### Setting up Node

    nodenv install
    
#### Build

    yarn install
    
#### Deploy to Bluemix

    bluemix api https://api.eu-de.bluemix.net
    bluemix login  -o alessiosaltarin@it.ibm.com -s Dev -sso
    bluemix app push

