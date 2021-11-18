**Student Name**:  Akhila Reddy Bukkasamudram

**NetID**: cl2103

# Homework 11
## (1)
### (a)
![](images/image11_1a.png)

### (b)
![](images/image11_1b.png)

## (2)

```javascript
  [{"name": "Workshop",
    "dates": ["Sept 16th", "Sept 26th", "Oct 6th", "Oct 16th",
              "Oct 26th", "etc..."]},

  {"name": "Group Project Session",
   "dates": ["Sept 23rd", "Oct 1st", "Oct 14th",
             "Oct 27nd"]},
  {"name": "Hackathon", "dates": ["Every Sunday every month"]}]
  ```

  ```javascript
  {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://locolhost:2020/activities",
    "title": "Activity Schema",
    "description": "A Schema that requires a JSON object",
    "type": "array",
    "items":
    {
        "type": "object",
        "properties":
        {
            "name": {
            "description": "name",
            "type": "string"
          
            },
            "dates": {
            "description": "date",
            "type": "array"
            }
        },
        "required": ["name", "dates"],
        "additionalProperties": false
    }
    
  }
```

## (3)
### (a)
```javascript
const handleErrors = (err, req, res, next) => {
  console.log("Harita");
  console.log(err);
  if (!err.statusCode) err.statusCode = 500;
  return res.status(err.statusCode).json({
    message: err.message,
  });
};

app.use(handleErrors);
```

### (b)
```javascript
  [{"name": "Workshop",
    "dates": ["Sept 16th", "Sept 26th", "Oct 6th", "Oct 16th",
              "Oct 26th", "etc..."]},

  {"name": "Group Project Session",
   "dates": ["Sept 23rd", "Oct 1st", "Oct 14th",
             "Oct 27nd"]},
  {"name": "Hackathon", "dates": ["Every Sunday every month"]}]
  ```

  ```javascript
  {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://locolhost:2020/activities",
    "title": "Activity Schema",
    "description": "A Schema that requires a JSON object",
    "type": "array",
    "items":
    {
        "type": "object",
        "properties":
        {
            "name": {
            "description": "name",
            "type": "string"
          
            },
            "dates": {
            "description": "date",
            "type": "array"
            }
        },
        "required": ["name", "dates"],
        "additionalProperties": false
    }
    
  }
```