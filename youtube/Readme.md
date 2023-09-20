```javascript
const VIDS = document.querySelectorAll("#video-title-link")

const OUT = [];
for(const VID of VIDS) {
	OUT[VID.data.watchEndpoint.videoId] = VIDS[0].innerText;
}


VIDS[0].data.watchEndpoint.videoId
VIDS[0].innerText
```
ITEM.innerText

















```javascript
const re = /(https?:\/\/)?(((m|www)\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
const id = "https://www.youtube.com/watch?v=l-gQLqv9f4o".match(re)[7];
```