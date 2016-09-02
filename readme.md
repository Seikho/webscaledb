# WebScaleDB
WebScaleDB - The new database that is ACID compliant(1), web scale(2) and asynchronous(3)!

<sub><sub>1. not actually ACID compliant</sub></sub>  
<sub><sub>2. probably not web scale</sub></sub>  
<sub><sub>3. completely synchronous, except for when it's not</sub></sub>  

```javascript
import * as db from 'webscaledb';


db.restore('db.json', () => { /* ... */ });
db.backup('db.json', () => { /* ... */ });

db.set('key', 'value');
db.get('key'); // 'value'
```

