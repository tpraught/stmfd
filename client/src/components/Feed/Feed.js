import React from "react";
import "./Feed.css";

const Feed = () =>(

<div className="row justify-content-center">
	<div className="col-5 m-4">
		    <div className="fb-page" data-href="https://www.facebook.com/stmichaelfire/" data-tabs="timeline" data-width="450" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false">
				<blockquote cite="https://www.facebook.com/stmichaelfire/" class="fb-xfbml-parse-ignore">
					<a href="https://www.facebook.com/stmichaelfire/">St. Michael Fire Dept.</a>
				</blockquote>
			</div>
	</div>
	<div className="col-5 m-4">
			<a class="twitter-timeline" data-width="450" data-height="500" data-theme="light" data-link-color="#2B7BB9" data-chrome="nofooter" href="https://twitter.com/cityofstmichael?ref_src=twsrc%5Etfw">Tweets by cityofstmichael</a> 
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
	</div>
</div>
)

export default Feed;

