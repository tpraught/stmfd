import React from "react";
import "./Feed.css";

const Feed = () =>(

<div id="wrapper" className="container-fluid mx-auto">
	<div className = "row mx-auto">
		 <div className = "col mx-auto">
		    <div className="fb-page" data-href="https://www.facebook.com/stmichaelfire/" data-tabs="timeline" data-width="450" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/stmichaelfire/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/stmichaelfire/">St. Michael Fire Dept.</a></blockquote></div>
		</div>
		<div className = "col mx-auto">
			<a class="twitter-timeline" data-width="450" data-height="500" data-theme="light" data-link-color="#2B7BB9" href="https://twitter.com/cityofstmichael?ref_src=twsrc%5Etfw">Tweets by cityofstmichael</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>		</div>
	</div>
</div>
)

export default Feed;

