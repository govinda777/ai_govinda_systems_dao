erDiagram
    USERS ||--o{ FOLLOWERS : "has"
    USERS ||--o{ FOLLOWING : "has"
    USERS ||--o{ NGOS : "runs"
    USERS ||--o{ ARTISTS : "is"
    USERS ||--o{ CUSTOMERS : "is"
    NGOS ||--o{ NGO_CATEGORIES : "in-category"
    ARTISTS ||--o{ ARTISTS : "visited"
    ARTISTS ||--o{ NGOS : "helped"
    CUSTOMERS ||--o{ ARTISTS : "visited"
    CUSTOMERS ||--o{ NGOS : "visited"
    NGO_CATEGORIES ||--o{ NGOS : "categorizes"
    NGO_CATEGORIES ||--o{ ARTISTS : "interests"

    USERS {
        string _id PK "_id"
        string name "name"
        string username "username"
        string email "email"
        string image "image"
        string emailVerified "emailVerified"
        objectIdArray followers "followers"
        objectIdArray following "following"
    }

    NGOS {
        string _id PK "_id"
        string user_id FK "user_id"
        string corporate_name "corporate_name"
        string address "adress"
        string postal_code "postal_code"
        string phone_number "phone_number"
        string near_wallet "near_wallet"
        string cause "cause"
        string suggest_a_value "suggest_a_value"
        object invite_artist "invite_artist"
    }

    ARTISTS {
        string _id PK "_id"
        string user_id FK "user_id"
        string full_name "full_name"
        string postal_code "postal_code"
        string email "email"
        string phone_number "phone_number"
        string wallet_address "wallet_address"
        objectIdArray ong_helped "ong_helped"
        objectIdArray ong_categories "ong_categories"
        objectIdArray ong_visited "ong_visited"
        objectIdArray artist_visited "artist_visited"
    }

    CUSTOMERS {
        string _id PK "_id"
        string user_id FK "user_id"
        string first_name "first_name"
        string last_name "last_name"
        string phone_number "phone_number"
        string wallet_address "wallet_address"
        objectIdArray ong_visited "ong_visited"
        objectIdArray artist_visited "artist_visited"
    }

    NGO_CATEGORIES {
        string _id PK "_id"
        string name "name"
    }

    FOLLOWERS {
        objectIdArray userId "users._id"
    }

    FOLLOWING {
        objectIdArray userId "users._id"
    }
