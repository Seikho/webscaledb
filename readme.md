```javascript
import * as db from 'webscaledb';


db.restore('db.json', () => { /* ... */ });
db.backup('db.json', () => { /* ... */ });

db.set('key', 'value');
db.get('key'); // 'value'
```