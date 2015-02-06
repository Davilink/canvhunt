function dessinerArrierePlan() {
  /// globals
	var numOfGrass = 200,
    grassWidth = 10,
		grass,
		w = oCanvasAP.width,
		h = oCanvasAP.height,

		img = document.createElement('img'),
		ix = 0,  /// background image position
		iw = -1; /// used for width and initial for flag
		
		/// load background image, use it whenever it's ready
		img.onload = function() {iw = this.width}
		img.src = 'http://i.imgur.com/zzjtzG7.jpg';

	/**
	 *	Grass object
	 *
	 *	Main object. Handles animation by calling update()
	*/
	function grassObj(x, y, seg1, seg2, maxAngle, grassWidth) {
	
		/// exposed properties we need for rendering
		this.x = x;
		this.y = y;
		this.seg1 = seg1;
		this.seg2 = seg2;
        this.grassWidth = grassWidth;
		this.gradient = getGradient(Math.random() * 50 + 50, 100 * Math.random() + 170);
		this.currentAngle;

		/// internals used for calculating new angle, goal, difference and speed
		var counter,
			delta,
			angle,
			diff,
			goal = getAngle();
			
		/// internal: returns an angel between 0 and maxAngle
		function getAngle() {
			return maxAngle * Math.random();
		}
		
		/// ease in-out function
		function easeInOut(t) {
			return t < 0.5 ? 4 * t * t * t : (t-1) * (2 * t - 2) * (2 * t - 2) + 1;
		}

		/// sets a new goal for grass to move to. Does the main calculations
		function newGoal() {
			angle = goal;
			this.currentAngle = angle;
			goal = getAngle();
			diff = goal - angle;
			counter = 0;
			
			delta = (4 * Math.random() + 1) / 100;
		}

		/// creates a gradient for this grass to increase realism
		function getGradient(min, max) {
		
			var g = oCtxAP.createLinearGradient(0, 0, 0, h);
			g.addColorStop(1,   'rgb(0,' + parseInt(min) + ', 0)');
			g.addColorStop(0,   'rgb(0,' + parseInt(max) + ', 0)');
			
			return g;
		}
		
		/// this is called from animation loop. Counts and keeps tracks of 
		///	current position and calls new goal when current goal is reached
		this.update = function(debug) {

			counter += delta;
		
			if (counter > 1) {
				newGoal();
				return;
			}
			
			var t = easeInOut(counter);
			this.currentAngle = angle + t * diff;

			if (debug) {
				console.log(t);
			}
		}
		
		/// init
		newGoal();

		return this;
	}

	/// Create all the grass
	function makeGrass(numOfGrass, width, height, hVariation, grassWidth) {
	
		/// setup variables
		var x, y, seg1, seg2, angle,
			hf = height * hVariation,
			i = 0,
			grass = [];
		
		/// generate grass
		for(; i < numOfGrass; i++) {

			x = width * Math.random();
			y = height - hf * Math.random();
			
			seg1 = y / 3 + y * hVariation * Math.random() * 0.1;
			seg2 = (y / 3 * 2) + y * hVariation * Math.random() * 0.1;
			
			grass.push(new grassObj(x, y, seg1, seg2, 15 * Math.random() + 50, grassWidth));
		}

		return grass;
	}
	grass = makeGrass(numOfGrass, w, h * 0.4, 0.3, grassWidth);
	
	/// RENDER
	function renderGrass(ctx, grass) {

		/// local vars for animation
		var len = grass.length,
			i = 0,
			gr, pos, diff, pts, x, y, gw;
		
		/// renders background when loaded
		if (iw > -1) {
			ctx.drawImage(img, ix--, 0);
			if (ix < -w) {
				ctx.drawImage(img, ix + iw, 0);
			}
			if (ix <= -iw) ix = 0;
		}
		
		ctx.fillStyle = 'rgb(196, 117, 13)';
		ctx.fillRect(0, h-(h*0.25), w, h*0.25);
		
		/// loops through the grass object and renders current state
		for(; gr = grass[i]; i++) {
	
			x = gr.x;
			y = gr.y;
			gw = gr.grassWidth;
            
			ctx.beginPath();

			pos = lineToAngle(ctx, x, h, y, gr.currentAngle + 225);
			
			diff = (pos[0] - x)
			
			pts = [];
			
			/// starts at bottom, goes to top middle and then back
			/// down with a slight offset to make the grass
			
			pts.push(x); /// first couple at bottom
			pts.push(h);
			
			pts.push(x + (diff / 4));
			pts.push(h - gr.seg1);

			pts.push(x + (diff / 3 * 2));
			pts.push(h - gr.seg2);
			
			pts.push(pos[0]);	/// top point
			pts.push(pos[1]);

			pts.push(x + (diff / 3 * 2) + gw *0.5);
			pts.push(h - gr.seg2);
			
			pts.push(x + (diff / 4) + gw * 0.6);
			pts.push(h - gr.seg1 + 10);

			pts.push(x + gw); /// end couple at bottom
			pts.push(h);

			/// smooth points
			ctx.curve(pts, 0.8, 5);
			
			ctx.closePath();

			/// fill grass with its gradient
			ctx.fillStyle = gr.gradient;
			ctx.fill();
		}
	}

	/// ANIMATE
	function animate(timeArg) {
	
		/// update each grass objects
		for(var i = 0;i < grass.length; i++) grass[i].update();			
	
		/// render them
		renderGrass(oCtxAP, grass);
	
		requestAnimationFrame(animate);
	}
	animate();

	/// this generate a end point based on length and angle
	function lineToAngle(ctx, x1, y1, length, angle) {

		angle = angle * Math.PI / 180;
		
		var x2 = x1 + length * Math.cos(angle),
			y2 = y1 + length * Math.sin(angle);
		
		return [x2, y2];
	}
}

/**
 *	Polyfill for requestAnimation frame
*/
window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame    ||
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

/**
 *	curve() by Ken Fyrstenberg Nilsen (c) 2013
*/
CanvasRenderingContext2D.prototype.curve = function(pts, ts, nos) {
		
	nos = (typeof numOfSegments === 'undefined') ? 16 : nos;

	var _pts = [], res = [],		// clone array
		x, y,						// our x,y coords
		t1x, t2x, t1y, t2y,			// tension vectors
		c1, c2, c3, c4,				// cardinal points
		st, st2, st3, st23, st32,	// steps
		t, i, l = pts.length,
		pt1, pt2, pt3, pt4;

	_pts.push(pts[0]);			//copy 1. point and insert at beginning
	_pts.push(pts[1]);

	_pts = _pts.concat(pts);

	_pts.push(pts[l - 2]);	//copy last point and append
	_pts.push(pts[l - 1]);

	this.moveTo(pts[0], pts[1])
	
	for (i = 2; i < l; i+=2) {

		pt1 = _pts[i];
		pt2 = _pts[i+1];
		pt3 = _pts[i+2];
		pt4 = _pts[i+3];

		// calc tension vectors
		t1x = (pt3 - _pts[i-2]) * ts;
		t2x = (_pts[i+4] - pt1) * ts;

		t1y = (pt4 - _pts[i-1]) * ts;
		t2y = (_pts[i+5] - pt2) * ts;

		for (t = 0; t <= nos; t++) {

			// pre-calc steps
			st = t / nos;
			st2 = st * st;
			st3 = st2 * st;
			st23 = st3 * 2;
			st32 = st2 * 3;

			// calc cardinals
			c1 = st23 - st32 + 1; 
			c2 = st32 - st23;
			c3 = st3 - 2 * st2 + st; 
			c4 = st3 - st2;

			res.push(c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x);
			res.push(c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y);
			
		} //for t
	} //for i
	
	l = res.length;
	for(i=0;i<l;i+=2) this.lineTo(res[i], res[i+1]);

} //func ext
