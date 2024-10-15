(function (cjs, an) {
	var p; // shortcut to reference prototypes
	var lib = {};
	var ss = {};
	var img = {};
	lib.ssMetadata = [
		{
			name: "Baner_magazyn_atlas_1",
			frames: [
				[1503, 350, 461, 54],
				[1503, 293, 470, 55],
				[1503, 406, 461, 54],
				[1503, 232, 507, 59],
				[1503, 462, 461, 54],
				[1503, 518, 428, 58],
				[1297, 887, 428, 58],
				[1315, 827, 616, 58],
				[679, 845, 616, 58],
				[1315, 597, 612, 113],
				[1315, 712, 612, 113],
				[679, 597, 634, 246],
				[1703, 150, 212, 38],
				[1703, 0, 186, 148],
				[0, 0, 1501, 595],
				[1503, 0, 198, 230],
				[0, 597, 677, 437],
			],
		},
	];

	(lib.AnMovieClip = function () {
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function (positionOrLabel) {
			cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
		};
		this.play = function () {
			cjs.MovieClip.prototype.play.call(this);
		};
		this.gotoAndStop = function (positionOrLabel) {
			cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
		};
		this.stop = function () {
			cjs.MovieClip.prototype.stop.call(this);
		};
	}).prototype = p = new cjs.MovieClip();
	// symbols:

	(lib.CachedBmp_13 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_12 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_11 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_10 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_9 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_8 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_7 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_6 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_5 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_4 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_3 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_2 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();

	(lib.CachedBmp_14 = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();

	(lib.box = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();

	(lib.poczekalnia = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();

	(lib.pod_logo = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();

	(lib.strzalka = function () {
		this.initialize(ss["Baner_magazyn_atlas_1"]);
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();
	// helper functions:

	function mc_symbol_clone() {
		var clone = this._cloneProps(
			new this.constructor(
				this.mode,
				this.startPosition,
				this.loop,
				this.reversed,
			),
		);
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}

	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
	}

	(lib.Symbol3 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.box();

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		this._renderFirstFrame();
	}).prototype = getMCSymbolPrototype(
		lib.Symbol3,
		new cjs.Rectangle(0, 0, 186, 148),
		null,
	);

	(lib.Symbol2 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.strzalka();

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		this._renderFirstFrame();
	}).prototype = getMCSymbolPrototype(
		lib.Symbol2,
		new cjs.Rectangle(0, 0, 677, 437),
		null,
	);

	(lib.Symbol1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.poczekalnia();

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		this._renderFirstFrame();
	}).prototype = getMCSymbolPrototype(
		lib.Symbol1,
		new cjs.Rectangle(0, 0, 1501, 595),
		null,
	);

	(lib.Klatkapośrednia28 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_8();
		this.instance.setTransform(-106.9, -14.6, 0.5, 0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-106.9, -14.6, 214, 29);

	(lib.Klatkapośrednia27 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_7();
		this.instance.setTransform(-106.9, -14.6, 0.5, 0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-106.9, -14.6, 214, 29);

	(lib.Klatkapośrednia26 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_6();
		this.instance.setTransform(-153.85, -14.6, 0.5, 0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-153.8, -14.6, 308, 29);

	(lib.Klatkapośrednia25 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_5();
		this.instance.setTransform(-153.85, -14.6, 0.5, 0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-153.8, -14.6, 308, 29);

	(lib.Klatkapośrednia20 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#ED7868")
			.s()
			.p(
				"AgeAeQgMgMAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMAMQgNANgSAAQgRAAgNgNg",
			);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.3, -4.3, 8.6, 8.6);

	(lib.Klatkapośrednia19 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#ED7868")
			.s()
			.p(
				"AgeAeQgMgMAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMAMQgNANgSAAQgRAAgNgNg",
			);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.3, -4.3, 8.6, 8.6);

	(lib.Klatkapośrednia18 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#ED7868")
			.s()
			.p(
				"AgeAeQgMgMAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMAMQgNANgSAAQgRAAgNgNg",
			);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.3, -4.3, 8.6, 8.6);

	(lib.Klatkapośrednia17 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#ED7868")
			.s()
			.p(
				"AgeAeQgMgMAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMAMQgNANgSAAQgRAAgNgNg",
			);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.3, -4.3, 8.6, 8.6);

	(lib.Klatkapośrednia16 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#ED7868")
			.s()
			.p(
				"AgeAeQgMgMAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMAMQgNANgSAAQgRAAgNgNg",
			);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.3, -4.3, 8.6, 8.6);

	(lib.Klatkapośrednia10 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_4();
		this.instance.setTransform(-152.9, -28.2, 0.5, 0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-152.9, -28.2, 306, 56.5);

	(lib.Klatkapośrednia9 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_3();
		this.instance.setTransform(-152.9, -28.2, 0.5, 0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-152.9, -28.2, 306, 56.5);

	(lib.Klatkapośrednia6 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_2();
		this.instance.setTransform(-158.45, -61.6, 0.5, 0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-158.4, -61.6, 317, 123);

	(lib.ClipGroup = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_2 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("Egz2AIAIAAv/MBntAAAIAAP/g");
		mask.setTransform(331.875, 51.175);

		// Warstwa_3
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#F26D64")
			.s()
			.p(
				"Egr2AIAQjUAAiWiWQiWiWAAjUQAAjTCWiWQCWiWDUAAMBXtAAAQDUAACWCWQCWCWAADTQAADUiWCWQiWCWjUAAg",
			);
		this.shape.setTransform(331.875, 51.175);

		var maskedShapeInstanceList = [this.shape];

		for (
			var shapedInstanceItr = 0;
			shapedInstanceItr < maskedShapeInstanceList.length;
			shapedInstanceItr++
		) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();
	}).prototype = getMCSymbolPrototype(
		lib.ClipGroup,
		new cjs.Rectangle(0, 0, 663.8, 102.4),
		null,
	);

	(lib.Klatkapośrednia42 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_13();
		this.instance.setTransform(-115.25, -15.15, 0.5, 0.5);

		this.instance_1 = new lib.ClipGroup();
		this.instance_1.setTransform(0, 0, 0.4621, 0.4621, 0, 0, 0, 331.9, 51.2);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
				.wait(1),
		);

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-153.3, -23.6, 306.70000000000005, 47.3);

	(lib.Klatkapośrednia41 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_12();
		this.instance.setTransform(-115.25, -15.15, 0.4902, 0.4902);

		this.instance_1 = new lib.ClipGroup();
		this.instance_1.setTransform(0, 0, 0.4621, 0.4621, 0, 0, 0, 331.9, 51.2);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
				.wait(1),
		);

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-153.3, -23.6, 306.70000000000005, 47.3);

	(lib.Klatkapośrednia40 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_11();
		this.instance.setTransform(-115.25, -15.15, 0.5, 0.5);

		this.instance_1 = new lib.ClipGroup();
		this.instance_1.setTransform(0, 0, 0.4621, 0.4621, 0, 0, 0, 331.9, 51.2);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
				.wait(1),
		);

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-153.3, -23.6, 306.70000000000005, 47.3);

	(lib.Klatkapośrednia39 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_10();
		this.instance.setTransform(-115.25, -15.15, 0.4546, 0.4546);

		this.instance_1 = new lib.ClipGroup();
		this.instance_1.setTransform(0, 0, 0.4621, 0.4621, 0, 0, 0, 331.9, 51.2);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
				.wait(1),
		);

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-153.3, -23.6, 306.70000000000005, 47.3);

	(lib.Klatkapośrednia38 = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Warstwa_1
		this.instance = new lib.CachedBmp_9();
		this.instance.setTransform(-115.25, -15.15, 0.5, 0.5);

		this.instance_1 = new lib.ClipGroup();
		this.instance_1.setTransform(0, 0, 0.4621, 0.4621, 0, 0, 0, 331.9, 51.2);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
				.wait(1),
		);

		this._renderFirstFrame();
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-153.3, -23.6, 306.70000000000005, 47.3);

	// stage content:
	(lib.Baner_magazyn = function (mode, startPosition, loop, reversed) {
		if (loop == null) {
			loop = true;
		}
		if (reversed == null) {
			reversed = false;
		}
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// logo
		this.instance = new lib.CachedBmp_14();
		this.instance.setTransform(780.8, 11.05, 0.5, 0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(283));

		// poddruk_logo
		this.instance_1 = new lib.pod_logo();
		this.instance_1.setTransform(721, -136);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(283));

		// Warstwa_1
		this.instance_2 = new lib.Klatkapośrednia38("synched", 0);
		this.instance_2.setTransform(188.5, 73.5, 0.0016, 0.0106);
		this.instance_2._off = true;

		this.instance_3 = new lib.Klatkapośrednia39("synched", 0);
		this.instance_3.setTransform(188.5, 73.55, 1.1, 1.1, 0, 0, 0, 0.1, 0.1);
		this.instance_3._off = true;

		this.instance_4 = new lib.Klatkapośrednia40("synched", 0);
		this.instance_4.setTransform(188.5, 73.5, 0.95, 0.95);
		this.instance_4._off = true;

		this.instance_5 = new lib.Klatkapośrednia41("synched", 0);
		this.instance_5.setTransform(188.5, 73.45, 1.02, 1.02);
		this.instance_5._off = true;

		this.instance_6 = new lib.Klatkapośrednia42("synched", 0);
		this.instance_6.setTransform(188.5, 73.5);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [] })
				.to({ state: [{ t: this.instance_2 }] }, 244)
				.to({ state: [{ t: this.instance_3 }] }, 5)
				.to({ state: [{ t: this.instance_4 }] }, 5)
				.to({ state: [{ t: this.instance_5 }] }, 4)
				.to({ state: [{ t: this.instance_6 }] }, 4)
				.wait(21),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_2)
				.wait(244)
				.to({ _off: false }, 0)
				.to(
					{
						_off: true,
						regX: 0.1,
						regY: 0.1,
						scaleX: 1.1,
						scaleY: 1.1,
						y: 73.55,
					},
					5,
				)
				.wait(34),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_3)
				.wait(244)
				.to({ _off: false }, 5)
				.to(
					{ _off: true, regX: 0, regY: 0, scaleX: 0.95, scaleY: 0.95, y: 73.5 },
					5,
				)
				.wait(29),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_4)
				.wait(249)
				.to({ _off: false }, 5)
				.to({ _off: true, scaleX: 1.02, scaleY: 1.02, y: 73.45 }, 4)
				.wait(25),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_5)
				.wait(254)
				.to({ _off: false }, 4)
				.to({ _off: true, scaleX: 1, scaleY: 1, y: 73.5 }, 4)
				.wait(21),
		);

		// kropka
		this.instance_7 = new lib.Klatkapośrednia16("synched", 0);
		this.instance_7.setTransform(54.9, 55.8, 0.0581, 0.0581, 0, 0, 0, 0.8, 0.8);
		this.instance_7._off = true;

		this.instance_8 = new lib.Klatkapośrednia17("synched", 0);
		this.instance_8.setTransform(54.9, 55.1, 1.5, 1.5);
		this.instance_8._off = true;

		this.instance_9 = new lib.Klatkapośrednia18("synched", 0);
		this.instance_9.setTransform(54.9, 55.25, 0.95, 0.95);
		this.instance_9._off = true;

		this.instance_10 = new lib.Klatkapośrednia19("synched", 0);
		this.instance_10.setTransform(54.9, 55.35);
		this.instance_10._off = true;

		this.instance_11 = new lib.Klatkapośrednia20("synched", 0);
		this.instance_11.setTransform(54.9, 55.45);
		this.instance_11._off = true;

		this.timeline.addTween(
			cjs.Tween.get(this.instance_7)
				.wait(180)
				.to({ _off: false }, 0)
				.to(
					{ _off: true, regX: 0, regY: 0, scaleX: 1.5, scaleY: 1.5, y: 55.1 },
					3,
				)
				.wait(100),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_8)
				.wait(180)
				.to({ _off: false }, 3)
				.to({ _off: true, scaleX: 0.95, scaleY: 0.95, y: 55.25 }, 3)
				.wait(97),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_9)
				.wait(183)
				.to({ _off: false }, 3)
				.to({ _off: true, scaleX: 1, scaleY: 1, y: 55.35 }, 3)
				.wait(94),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_10)
				.wait(186)
				.to({ _off: false }, 3)
				.to({ _off: true, y: 55.45 }, 3)
				.wait(91),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_11)
				.wait(189)
				.to({ _off: false }, 3)
				.wait(40)
				.to({ y: 55.7 }, 0)
				.to({ scaleX: 1.5, scaleY: 1.5, y: 56.05 }, 3)
				.to(
					{ regX: 0.8, regY: 0.8, scaleX: 0.0581, scaleY: 0.0581, y: 56.2 },
					3,
				)
				.to({ _off: true }, 3)
				.wait(42),
		);

		// muzyka
		this.instance_12 = new lib.Klatkapośrednia27("synched", 0);
		this.instance_12.setTransform(173.15, -3.05);
		this.instance_12.alpha = 0;
		this.instance_12._off = true;

		this.instance_13 = new lib.Klatkapośrednia28("synched", 0);
		this.instance_13.setTransform(173.15, 52.65);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [] })
				.to({ state: [{ t: this.instance_12 }] }, 175)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_13 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 48)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [{ t: this.instance_12 }] }, 1)
				.to({ state: [] }, 1)
				.wait(40),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_12)
				.wait(175)
				.to({ _off: false }, 0)
				.wait(1)
				.to({ regX: 0.1, regY: -0.1, x: 173.25, y: -1.3, alpha: 0.1111 }, 0)
				.wait(1)
				.to({ y: 3.3, alpha: 0.2222 }, 0)
				.wait(1)
				.to({ y: 9.8, alpha: 0.3333 }, 0)
				.wait(1)
				.to({ y: 17.6, alpha: 0.4444 }, 0)
				.wait(1)
				.to({ y: 26, alpha: 0.5556 }, 0)
				.wait(1)
				.to({ y: 34.55, alpha: 0.6667 }, 0)
				.wait(1)
				.to({ y: 42.5, alpha: 0.7778 }, 0)
				.wait(1)
				.to({ y: 48.9, alpha: 0.8889 }, 0)
				.wait(1)
				.to({ y: 51.9, alpha: 1 }, 0)
				.to({ _off: true }, 1)
				.wait(48)
				.to({ _off: false, regX: 0, regY: 0, x: 173.15, y: 52 }, 0)
				.wait(1)
				.to({ regX: 0.1, regY: -0.1, x: 173.25, y: 53.65, alpha: 0.875 }, 0)
				.wait(1)
				.to({ y: 58.4, alpha: 0.75 }, 0)
				.wait(1)
				.to({ y: 65.55, alpha: 0.625 }, 0)
				.wait(1)
				.to({ y: 74.6, alpha: 0.5 }, 0)
				.wait(1)
				.to({ y: 85.4, alpha: 0.375 }, 0)
				.wait(1)
				.to({ y: 97.7, alpha: 0.25 }, 0)
				.wait(1)
				.to({ y: 111.45, alpha: 0.125 }, 0)
				.wait(1)
				.to({ y: 126.9, alpha: 0 }, 0)
				.wait(1)
				.to({ startPosition: 0 }, 0)
				.to({ _off: true }, 1)
				.wait(40),
		);

		// kropka
		this.instance_14 = new lib.Klatkapośrednia16("synched", 0);
		this.instance_14.setTransform(
			54.9,
			91.95,
			0.0581,
			0.0581,
			0,
			0,
			0,
			0.8,
			0.8,
		);
		this.instance_14._off = true;

		this.instance_15 = new lib.Klatkapośrednia17("synched", 0);
		this.instance_15.setTransform(54.9, 91.25, 1.5, 1.5);
		this.instance_15._off = true;

		this.instance_16 = new lib.Klatkapośrednia18("synched", 0);
		this.instance_16.setTransform(54.9, 91.4, 0.95, 0.95);
		this.instance_16._off = true;

		this.instance_17 = new lib.Klatkapośrednia19("synched", 0);
		this.instance_17.setTransform(54.9, 91.5);
		this.instance_17._off = true;

		this.instance_18 = new lib.Klatkapośrednia20("synched", 0);
		this.instance_18.setTransform(54.9, 91.6);
		this.instance_18._off = true;

		this.timeline.addTween(
			cjs.Tween.get(this.instance_14)
				.wait(174)
				.to({ _off: false }, 0)
				.to(
					{ _off: true, regX: 0, regY: 0, scaleX: 1.5, scaleY: 1.5, y: 91.25 },
					3,
				)
				.wait(106),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_15)
				.wait(174)
				.to({ _off: false }, 3)
				.to({ _off: true, scaleX: 0.95, scaleY: 0.95, y: 91.4 }, 3)
				.wait(103),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_16)
				.wait(177)
				.to({ _off: false }, 3)
				.to({ _off: true, scaleX: 1, scaleY: 1, y: 91.5 }, 3)
				.wait(100),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_17)
				.wait(180)
				.to({ _off: false }, 3)
				.to({ _off: true, y: 91.6 }, 3)
				.wait(97),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_18)
				.wait(183)
				.to({ _off: false }, 3)
				.wait(40)
				.to({ y: 91.85 }, 0)
				.to({ scaleX: 1.5, scaleY: 1.5, y: 92.2 }, 3)
				.to(
					{ regX: 0.8, regY: 0.8, scaleX: 0.0581, scaleY: 0.0581, y: 92.35 },
					3,
				)
				.to({ _off: true }, 3)
				.wait(48),
		);

		// filmy_dla_dzieci
		this.instance_19 = new lib.Klatkapośrednia25("synched", 0);
		this.instance_19.setTransform(220.1, -3.05);
		this.instance_19.alpha = 0;
		this.instance_19._off = true;

		this.instance_20 = new lib.Klatkapośrednia26("synched", 0);
		this.instance_20.setTransform(220.1, 89.95);

		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [] })
				.to({ state: [{ t: this.instance_19 }] }, 169)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_20 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 48)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [{ t: this.instance_19 }] }, 1)
				.to({ state: [] }, 1)
				.wait(46),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_19)
				.wait(169)
				.to({ _off: false }, 0)
				.wait(1)
				.to({ regX: 0.2, regY: -0.1, x: 220.3, y: -0.85, alpha: 0.1111 }, 0)
				.wait(1)
				.to({ y: 6.15, alpha: 0.2222 }, 0)
				.wait(1)
				.to({ y: 17.7, alpha: 0.3333 }, 0)
				.wait(1)
				.to({ y: 32.85, alpha: 0.4444 }, 0)
				.wait(1)
				.to({ y: 49.55, alpha: 0.5556 }, 0)
				.wait(1)
				.to({ y: 65.3, alpha: 0.6667 }, 0)
				.wait(1)
				.to({ y: 77.85, alpha: 0.7778 }, 0)
				.wait(1)
				.to({ y: 85.8, alpha: 0.8889 }, 0)
				.wait(1)
				.to({ y: 88.9, alpha: 1 }, 0)
				.to({ _off: true }, 1)
				.wait(48)
				.to({ _off: false, regX: 0, regY: 0, x: 220.1, y: 88.95 }, 0)
				.wait(1)
				.to({ regX: 0.2, regY: -0.1, x: 220.3, y: 89.75, alpha: 0.875 }, 0)
				.wait(1)
				.to({ y: 92.25, alpha: 0.75 }, 0)
				.wait(1)
				.to({ y: 96.15, alpha: 0.625 }, 0)
				.wait(1)
				.to({ y: 101.3, alpha: 0.5 }, 0)
				.wait(1)
				.to({ y: 107.55, alpha: 0.375 }, 0)
				.wait(1)
				.to({ y: 114.9, alpha: 0.25 }, 0)
				.wait(1)
				.to({ y: 123.25, alpha: 0.125 }, 0)
				.wait(1)
				.to({ y: 132.8, alpha: 0 }, 0)
				.wait(1)
				.to({ startPosition: 0 }, 0)
				.to({ _off: true }, 1)
				.wait(46),
		);

		// kropka
		this.instance_21 = new lib.Klatkapośrednia16("synched", 0);
		this.instance_21.setTransform(
			54.9,
			65.3,
			0.0581,
			0.0581,
			0,
			0,
			0,
			0.8,
			0.8,
		);
		this.instance_21._off = true;

		this.instance_22 = new lib.Klatkapośrednia17("synched", 0);
		this.instance_22.setTransform(54.9, 65.3, 1.5, 1.5);
		this.instance_22._off = true;

		this.instance_23 = new lib.Klatkapośrednia18("synched", 0);
		this.instance_23.setTransform(54.9, 65.25, 0.95, 0.95);
		this.instance_23._off = true;

		this.instance_24 = new lib.Klatkapośrednia19("synched", 0);
		this.instance_24.setTransform(54.9, 65.3);
		this.instance_24._off = true;

		this.instance_25 = new lib.Klatkapośrednia20("synched", 0);
		this.instance_25.setTransform(54.9, 65.3);
		this.instance_25._off = true;

		this.timeline.addTween(
			cjs.Tween.get(this.instance_21)
				.wait(133)
				.to({ _off: false }, 0)
				.to({ _off: true, regX: 0, regY: 0, scaleX: 1.5, scaleY: 1.5 }, 3)
				.wait(147),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_22)
				.wait(133)
				.to({ _off: false }, 3)
				.to({ _off: true, scaleX: 0.95, scaleY: 0.95, y: 65.25 }, 3)
				.wait(144),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_23)
				.wait(136)
				.to({ _off: false }, 3)
				.to({ _off: true, scaleX: 1, scaleY: 1, y: 65.3 }, 3)
				.wait(141),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_24)
				.wait(139)
				.to({ _off: false }, 3)
				.to({ _off: true }, 3)
				.wait(138),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_25)
				.wait(142)
				.to({ _off: false }, 3)
				.wait(16)
				.to({ startPosition: 0 }, 0)
				.to({ scaleX: 1.5, scaleY: 1.5 }, 3)
				.to({ regX: 0.8, regY: 0.8, scaleX: 0.0581, scaleY: 0.0581 }, 3)
				.to({ _off: true }, 3)
				.wait(113),
		);

		// Profesjonalne_filmy
		this.instance_26 = new lib.Klatkapośrednia9("synched", 0);
		this.instance_26.setTransform(218.85, 2.05);
		this.instance_26.alpha = 0;
		this.instance_26._off = true;

		this.instance_27 = new lib.Klatkapośrednia10("synched", 0);
		this.instance_27.setTransform(218.85, 76.45);
		this.instance_27._off = true;

		this.timeline.addTween(
			cjs.Tween.get(this.instance_26)
				.wait(128)
				.to({ _off: false }, 0)
				.wait(1)
				.to({ y: 4.8601, alpha: 0.1111 }, 0)
				.wait(1)
				.to({ y: 12.3174, alpha: 0.2222 }, 0)
				.wait(1)
				.to({ y: 22.9106, alpha: 0.3333 }, 0)
				.wait(1)
				.to({ y: 35.1277, alpha: 0.4444 }, 0)
				.wait(1)
				.to({ y: 47.5348, alpha: 0.5556 }, 0)
				.wait(1)
				.to({ y: 58.8387, alpha: 0.6667 }, 0)
				.wait(1)
				.to({ y: 67.927, alpha: 0.7778 }, 0)
				.wait(1)
				.to({ y: 73.8859, alpha: 0.8889 }, 0)
				.wait(1)
				.to({ y: 76, alpha: 1 }, 0)
				.to({ _off: true }, 1)
				.wait(145),
		);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_27)
				.wait(138)
				.to({ _off: false }, 0)
				.wait(23)
				.to({ y: 76 }, 0)
				.wait(1)
				.to({ y: 77.3559, alpha: 0.9 }, 0)
				.wait(1)
				.to({ y: 80.9259, alpha: 0.8 }, 0)
				.wait(1)
				.to({ y: 86.193, alpha: 0.7 }, 0)
				.wait(1)
				.to({ y: 92.8273, alpha: 0.6 }, 0)
				.wait(1)
				.to({ y: 100.6063, alpha: 0.5 }, 0)
				.wait(1)
				.to({ y: 109.3757, alpha: 0.4 }, 0)
				.wait(1)
				.to({ y: 119.0301, alpha: 0.3 }, 0)
				.wait(1)
				.to({ y: 129.5053, alpha: 0.2 }, 0)
				.wait(1)
				.to({ y: 140.786, alpha: 0.1 }, 0)
				.wait(1)
				.to({ y: 153, alpha: 0 }, 0)
				.wait(1)
				.to({ y: 152.8875 }, 0)
				.wait(1)
				.to({ y: 152.775 }, 0)
				.wait(1)
				.to({ y: 152.6625 }, 0)
				.wait(1)
				.to({ y: 152.55 }, 0)
				.wait(1)
				.to({ y: 152.4375 }, 0)
				.wait(1)
				.to({ y: 152.325 }, 0)
				.wait(1)
				.to({ y: 152.2125 }, 0)
				.wait(1)
				.to({ y: 152.1 }, 0)
				.to({ _off: true }, 1)
				.wait(103),
		);

		// box
		this.instance_28 = new lib.Symbol3();
		this.instance_28.setTransform(481.9, 77.75, 0.01, 0.01, 0, 0, 0, 90, 70);
		this.instance_28._off = true;

		this.timeline.addTween(
			cjs.Tween.get(this.instance_28)
				.wait(69)
				.to({ _off: false }, 0)
				.wait(1)
				.to(
					{
						regX: 93,
						regY: 74,
						scaleX: 0.1833,
						scaleY: 0.1833,
						x: 482.4,
						y: 78.45,
					},
					0,
				)
				.wait(1)
				.to({ scaleX: 0.3667, scaleY: 0.3667, x: 482.95, y: 79.2 }, 0)
				.wait(1)
				.to({ scaleX: 0.55, scaleY: 0.55, x: 483.5, y: 79.9 }, 0)
				.wait(1)
				.to({ scaleX: 0.7333, scaleY: 0.7333, x: 484.05, y: 80.6 }, 0)
				.wait(1)
				.to({ scaleX: 0.9167, scaleY: 0.9167, x: 484.6, y: 81.35 }, 0)
				.wait(1)
				.to({ scaleX: 1.1, scaleY: 1.1, x: 485.15, y: 82.1 }, 0)
				.wait(1)
				.to({ scaleX: 1.075, scaleY: 1.075, x: 485.05, y: 82 }, 0)
				.wait(1)
				.to({ scaleX: 1.05, scaleY: 1.05, x: 485, y: 81.9 }, 0)
				.wait(1)
				.to({ scaleX: 1.025, scaleY: 1.025, x: 484.9, y: 81.8 }, 0)
				.wait(1)
				.to({ scaleX: 1, scaleY: 1, x: 484.85, y: 81.7 }, 0)
				.wait(1)
				.to({ scaleX: 0.975, scaleY: 0.975, x: 484.75, y: 81.6 }, 0)
				.wait(1)
				.to({ scaleX: 0.95, scaleY: 0.95, x: 484.7, y: 81.5 }, 0)
				.wait(1)
				.to({ scaleX: 0.9625, scaleY: 0.9625, x: 484.75, y: 81.55 }, 0)
				.wait(1)
				.to({ scaleX: 0.975, scaleY: 0.975, x: 484.8, y: 81.6 }, 0)
				.wait(1)
				.to({ scaleX: 0.9875, scaleY: 0.9875, x: 484.85, y: 81.65 }, 0)
				.wait(1)
				.to({ scaleX: 1, scaleY: 1, x: 484.9, y: 81.7 }, 0)
				.wait(12)
				.to({ x: 484.95, y: 81.75 }, 0)
				.wait(186),
		);

		// Telewizja_dla_gabinetów
		this.instance_29 = new lib.Klatkapośrednia6("synched", 0);
		this.instance_29.setTransform(199.05, 75.25);
		this.instance_29._off = true;

		this.timeline.addTween(
			cjs.Tween.get(this.instance_29)
				.wait(121)
				.to({ _off: false }, 0)
				.wait(1)
				.to({ regY: -0.1, y: 77.4, alpha: 0.8889 }, 0)
				.wait(1)
				.to({ y: 84.25, alpha: 0.7778 }, 0)
				.wait(1)
				.to({ y: 95, alpha: 0.6667 }, 0)
				.wait(1)
				.to({ y: 107.9, alpha: 0.5556 }, 0)
				.wait(1)
				.to({ y: 120.5, alpha: 0.4444 }, 0)
				.wait(1)
				.to({ y: 130.95, alpha: 0.3333 }, 0)
				.wait(1)
				.to({ y: 138.3, alpha: 0.2222 }, 0)
				.wait(1)
				.to({ y: 142.55, alpha: 0.1111 }, 0)
				.wait(1)
				.to({ y: 143.9, alpha: 0 }, 0)
				.wait(1)
				.to({ startPosition: 0 }, 0)
				.wait(1)
				.to({ startPosition: 0 }, 0)
				.wait(1)
				.to({ startPosition: 0 }, 0)
				.wait(1)
				.to({ startPosition: 0 }, 0)
				.to({ _off: true }, 1)
				.wait(148),
		);

		// Telewizja_dla_gabinetów
		this.instance_30 = new lib.Klatkapośrednia6("synched", 0);
		this.instance_30.setTransform(199.05, 75.1);
		this.instance_30.alpha = 0;
		this.instance_30._off = true;

		this.timeline.addTween(
			cjs.Tween.get(this.instance_30)
				.wait(49)
				.to({ _off: false }, 0)
				.to({ alpha: 1 }, 15)
				.to({ _off: true }, 57)
				.wait(162),
		);

		// strzalka
		this.instance_31 = new lib.Symbol2();
		this.instance_31.setTransform(-370, 74.5, 1, 1, 0, 0, 0, 338.5, 218.5);
		this.instance_31.alpha = 0;
		this.instance_31._off = true;

		this.timeline.addTween(
			cjs.Tween.get(this.instance_31)
				.wait(18)
				.to({ _off: false }, 0)
				.wait(1)
				.to({ x: -367.9, alpha: 0.0625 }, 0)
				.wait(1)
				.to({ x: -361.2, alpha: 0.125 }, 0)
				.wait(1)
				.to({ x: -348.65, alpha: 0.1875 }, 0)
				.wait(1)
				.to({ x: -328.8, alpha: 0.25 }, 0)
				.wait(1)
				.to({ x: -299.35, alpha: 0.3125 }, 0)
				.wait(1)
				.to({ x: -257.55, alpha: 0.375 }, 0)
				.wait(1)
				.to({ x: -200.1, alpha: 0.4375 }, 0)
				.wait(1)
				.to({ x: -126.25, alpha: 0.5 }, 0)
				.wait(1)
				.to({ x: -42.55, alpha: 0.5625 }, 0)
				.wait(1)
				.to({ x: 38.15, alpha: 0.625 }, 0)
				.wait(1)
				.to({ x: 106.5, alpha: 0.6875 }, 0)
				.wait(1)
				.to({ x: 161.2, alpha: 0.75 }, 0)
				.wait(1)
				.to({ x: 204.05, alpha: 0.8125 }, 0)
				.wait(1)
				.to({ x: 237.5, alpha: 0.875 }, 0)
				.wait(1)
				.to({ x: 263.6, alpha: 0.9375 }, 0)
				.wait(1)
				.to({ x: 283.8, alpha: 1 }, 0)
				.wait(1)
				.to({ x: 299.2 }, 0)
				.wait(1)
				.to({ x: 310.6 }, 0)
				.wait(1)
				.to({ x: 318.65 }, 0)
				.wait(1)
				.to({ x: 323.8 }, 0)
				.wait(1)
				.to({ x: 326.5 }, 0)
				.wait(1)
				.to({ x: 327 }, 0)
				.wait(243),
		);

		// poczekalnia
		this.instance_32 = new lib.Symbol1();
		this.instance_32.setTransform(
			365.5,
			96.05,
			1.1889,
			1.1565,
			0,
			0,
			0,
			648.6,
			271.8,
		);

		this.timeline.addTween(
			cjs.Tween.get(this.instance_32)
				.wait(1)
				.to(
					{ regX: 750.5, regY: 297.5, scaleX: 1.1888, x: 487.35, y: 125.75 },
					0,
				)
				.wait(1)
				.to({ scaleY: 1.1566, x: 488.05 }, 0)
				.wait(1)
				.to({ scaleX: 1.1889, scaleY: 1.1569, x: 488.7, y: 125.7 }, 0)
				.wait(1)
				.to({ scaleX: 1.1891, scaleY: 1.1572, x: 489.35 }, 0)
				.wait(1)
				.to({ scaleX: 1.1893, scaleY: 1.1576, x: 490 }, 0)
				.wait(1)
				.to({ scaleX: 1.1896, scaleY: 1.1581, x: 490.65 }, 0)
				.wait(1)
				.to({ scaleX: 1.19, scaleY: 1.1587, x: 491.25 }, 0)
				.wait(1)
				.to({ scaleX: 1.1904, scaleY: 1.1594, x: 491.9 }, 0)
				.wait(1)
				.to({ scaleX: 1.191, scaleY: 1.1602, x: 492.55 }, 0)
				.wait(1)
				.to({ scaleX: 1.1916, scaleY: 1.1612, x: 493.1, y: 125.75 }, 0)
				.wait(1)
				.to({ scaleX: 1.1924, scaleY: 1.1623, x: 493.75 }, 0)
				.wait(1)
				.to({ scaleX: 1.1933, scaleY: 1.1635, x: 494.35 }, 0)
				.wait(1)
				.to({ scaleX: 1.1943, scaleY: 1.1649, x: 494.95 }, 0)
				.wait(1)
				.to({ scaleX: 1.1954, scaleY: 1.1665, x: 495.55, y: 125.85 }, 0)
				.wait(1)
				.to({ scaleX: 1.1967, scaleY: 1.1683, x: 496.15 }, 0)
				.wait(1)
				.to({ scaleX: 1.1981, scaleY: 1.1702, x: 496.75, y: 125.9 }, 0)
				.wait(1)
				.to({ scaleX: 1.1997, scaleY: 1.1723, x: 497.25 }, 0)
				.wait(1)
				.to({ scaleX: 1.2015, scaleY: 1.1747, x: 497.85, y: 125.95 }, 0)
				.wait(1)
				.to({ scaleX: 1.2034, scaleY: 1.1773, x: 498.4, y: 126.05 }, 0)
				.wait(1)
				.to({ scaleX: 1.2056, scaleY: 1.1801, x: 498.95, y: 126.1 }, 0)
				.wait(1)
				.to({ scaleX: 1.208, scaleY: 1.1833, x: 499.45, y: 126.15 }, 0)
				.wait(1)
				.to({ scaleX: 1.2106, scaleY: 1.1867, x: 499.95, y: 126.25 }, 0)
				.wait(1)
				.to({ scaleX: 1.2136, scaleY: 1.1905, x: 500.45, y: 126.35 }, 0)
				.wait(1)
				.to({ scaleX: 1.2169, scaleY: 1.1947, x: 500.9, y: 126.45 }, 0)
				.wait(1)
				.to({ scaleX: 1.2205, scaleY: 1.1993, x: 501.3, y: 126.6 }, 0)
				.wait(1)
				.to({ scaleX: 1.2246, scaleY: 1.2044, x: 501.65, y: 126.7 }, 0)
				.wait(1)
				.to({ scaleX: 1.2291, scaleY: 1.21, x: 502.05, y: 126.85 }, 0)
				.wait(1)
				.to({ scaleX: 1.2341, scaleY: 1.2162, x: 502.55, y: 126.95 }, 0)
				.wait(1)
				.to({ scaleX: 1.2398, scaleY: 1.2231, x: 502.95, y: 127.15 }, 0)
				.wait(1)
				.to({ scaleX: 1.2462, scaleY: 1.2306, x: 503.45, y: 127.3 }, 0)
				.wait(1)
				.to({ scaleX: 1.2534, scaleY: 1.239, x: 503.95, y: 127.5 }, 0)
				.wait(1)
				.to({ scaleX: 1.2615, scaleY: 1.2482, x: 504.6, y: 127.75 }, 0)
				.wait(1)
				.to({ scaleX: 1.2706, scaleY: 1.2582, x: 505.2, y: 127.95 }, 0)
				.wait(1)
				.to({ scaleX: 1.2805, scaleY: 1.2689, x: 505.95, y: 128.2 }, 0)
				.wait(1)
				.to({ scaleX: 1.291, scaleY: 1.28, x: 506.7, y: 128.45 }, 0)
				.wait(1)
				.to({ scaleX: 1.3014, scaleY: 1.2912, x: 507.4, y: 128.7 }, 0)
				.wait(1)
				.to({ scaleX: 1.3113, scaleY: 1.302, x: 508.1, y: 128.95 }, 0)
				.wait(1)
				.to({ scaleX: 1.32, scaleY: 1.3118, x: 508.6, y: 129.15 }, 0)
				.wait(1)
				.to({ scaleX: 1.3273, scaleY: 1.3205, x: 508.95, y: 129.35 }, 0)
				.wait(1)
				.to({ scaleX: 1.3333, scaleY: 1.3278, x: 509.15, y: 129.5 }, 0)
				.wait(1)
				.to({ scaleX: 1.3381, scaleY: 1.3339, x: 509.2, y: 129.6 }, 0)
				.wait(1)
				.to({ scaleX: 1.342, scaleY: 1.3388, y: 129.65 }, 0)
				.wait(1)
				.to({ scaleX: 1.3449, scaleY: 1.3427, x: 509.05, y: 129.7 }, 0)
				.wait(1)
				.to({ scaleX: 1.3472, scaleY: 1.3458, x: 508.75, y: 129.75 }, 0)
				.wait(1)
				.to({ scaleX: 1.349, scaleY: 1.3481, x: 508.45 }, 0)
				.wait(1)
				.to({ scaleX: 1.3502, scaleY: 1.3497, x: 508.1 }, 0)
				.wait(1)
				.to({ scaleX: 1.351, scaleY: 1.3508, x: 507.65 }, 0)
				.wait(1)
				.to({ scaleX: 1.3514, scaleY: 1.3514, x: 507.2, y: 129.7 }, 0)
				.wait(1)
				.to({ scaleX: 1.3516, scaleY: 1.3516, x: 506.7, y: 129.65 }, 0)
				.wait(1)
				.to({ x: 506.15 }, 0)
				.wait(1)
				.to({ x: 505.65, y: 129.6 }, 0)
				.wait(1)
				.to({ x: 505.1, y: 129.55 }, 0)
				.wait(1)
				.to({ x: 504.55, y: 129.5 }, 0)
				.wait(1)
				.to({ x: 504, y: 129.45 }, 0)
				.wait(1)
				.to({ x: 503.5 }, 0)
				.wait(1)
				.to({ x: 502.95, y: 129.4 }, 0)
				.wait(1)
				.to({ x: 502.4 }, 0)
				.wait(1)
				.to({ x: 501.9, y: 129.35 }, 0)
				.wait(1)
				.to({ x: 501.35 }, 0)
				.wait(1)
				.to({ x: 500.85 }, 0)
				.wait(1)
				.to({ x: 500.4 }, 0)
				.wait(1)
				.to({ x: 499.9 }, 0)
				.wait(1)
				.to({ x: 499.35 }, 0)
				.wait(1)
				.to({ x: 498.8 }, 0)
				.wait(1)
				.to({ x: 498.25 }, 0)
				.wait(1)
				.to({ x: 497.7 }, 0)
				.wait(1)
				.to({ x: 497.15 }, 0)
				.wait(1)
				.to({ x: 496.6 }, 0)
				.wait(1)
				.to({ x: 496, y: 129.4 }, 0)
				.wait(1)
				.to({ x: 495.45 }, 0)
				.wait(1)
				.to({ x: 494.85 }, 0)
				.wait(1)
				.to({ x: 494.3 }, 0)
				.wait(1)
				.to({ x: 493.7 }, 0)
				.wait(1)
				.to({ x: 493.15, y: 129.45 }, 0)
				.wait(1)
				.to({ x: 492.55 }, 0)
				.wait(1)
				.to({ x: 492 }, 0)
				.wait(1)
				.to({ x: 491.4 }, 0)
				.wait(1)
				.to({ x: 490.85, y: 129.5 }, 0)
				.wait(1)
				.to({ x: 490.25 }, 0)
				.wait(1)
				.to({ x: 489.7 }, 0)
				.wait(1)
				.to({ x: 489.1 }, 0)
				.wait(1)
				.to({ x: 488.55, y: 129.55 }, 0)
				.wait(1)
				.to({ x: 488 }, 0)
				.wait(1)
				.to({ x: 487.4 }, 0)
				.wait(1)
				.to({ x: 486.85 }, 0)
				.wait(1)
				.to({ x: 486.3, y: 129.6 }, 0)
				.wait(1)
				.to({ x: 485.75 }, 0)
				.wait(1)
				.to({ x: 485.15 }, 0)
				.wait(1)
				.to({ x: 484.6 }, 0)
				.wait(1)
				.to({ x: 484.05, y: 129.65 }, 0)
				.wait(1)
				.to({ x: 483.55 }, 0)
				.wait(1)
				.to({ x: 483 }, 0)
				.wait(1)
				.to({ x: 482.45, y: 129.7 }, 0)
				.wait(1)
				.to({ x: 481.9 }, 0)
				.wait(1)
				.to({ x: 481.4 }, 0)
				.wait(1)
				.to({ x: 480.85 }, 0)
				.wait(1)
				.to({ x: 480.35, y: 129.75 }, 0)
				.wait(1)
				.to({ x: 479.8 }, 0)
				.wait(1)
				.to({ x: 479.3 }, 0)
				.wait(1)
				.to({ x: 478.8 }, 0)
				.wait(1)
				.to({ x: 478.3, y: 129.8 }, 0)
				.wait(1)
				.to({ x: 477.8 }, 0)
				.wait(1)
				.to({ x: 477.35 }, 0)
				.wait(1)
				.to({ x: 476.85 }, 0)
				.wait(1)
				.to({ x: 476.4, y: 129.85 }, 0)
				.wait(1)
				.to({ x: 475.9 }, 0)
				.wait(1)
				.to({ x: 475.45 }, 0)
				.wait(1)
				.to({ x: 475.05 }, 0)
				.wait(1)
				.to({ x: 474.6, y: 129.9 }, 0)
				.wait(1)
				.to({ x: 474.2 }, 0)
				.wait(1)
				.to({ x: 473.75 }, 0)
				.wait(1)
				.to({ x: 473.4 }, 0)
				.wait(1)
				.to({ x: 473 }, 0)
				.wait(1)
				.to({ x: 472.65, y: 129.95 }, 0)
				.wait(1)
				.to({ x: 472.3 }, 0)
				.wait(1)
				.to({ x: 472 }, 0)
				.wait(1)
				.to({ x: 471.7 }, 0)
				.wait(1)
				.to({ x: 471.4 }, 0)
				.wait(1)
				.to({ x: 471.15 }, 0)
				.wait(1)
				.to({ x: 470.95, y: 130 }, 0)
				.wait(1)
				.to({ x: 470.8 }, 0)
				.wait(1)
				.to({ x: 470.7 }, 0)
				.wait(1)
				.to({ x: 470.65 }, 0)
				.wait(1)
				.to({ x: 470.7 }, 0)
				.wait(1)
				.to({ x: 470.8 }, 0)
				.wait(1)
				.to({ x: 471 }, 0)
				.wait(1)
				.to({ x: 471.25 }, 0)
				.wait(1)
				.to({ x: 471.5 }, 0)
				.wait(1)
				.to({ x: 471.85 }, 0)
				.wait(1)
				.to({ x: 472.15 }, 0)
				.wait(1)
				.to({ x: 472.5 }, 0)
				.wait(1)
				.to({ x: 472.9 }, 0)
				.wait(1)
				.to({ x: 473.25 }, 0)
				.wait(1)
				.to({ x: 473.65 }, 0)
				.wait(1)
				.to({ x: 474.1 }, 0)
				.wait(1)
				.to({ x: 474.5 }, 0)
				.wait(1)
				.to({ x: 474.95 }, 0)
				.wait(1)
				.to({ x: 475.4 }, 0)
				.wait(1)
				.to({ x: 475.85 }, 0)
				.wait(1)
				.to({ x: 476.3 }, 0)
				.wait(1)
				.to({ x: 476.75 }, 0)
				.wait(1)
				.to({ x: 477.25 }, 0)
				.wait(1)
				.to({ x: 477.7 }, 0)
				.wait(1)
				.to({ x: 478.2 }, 0)
				.wait(1)
				.to({ x: 478.7 }, 0)
				.wait(1)
				.to({ x: 479.2 }, 0)
				.wait(1)
				.to({ x: 479.65 }, 0)
				.wait(1)
				.to({ x: 480.15 }, 0)
				.wait(1)
				.to({ x: 480.65 }, 0)
				.wait(1)
				.to({ x: 481.15 }, 0)
				.wait(1)
				.to({ x: 481.65 }, 0)
				.wait(1)
				.to({ x: 482.15 }, 0)
				.wait(1)
				.to({ x: 482.65 }, 0)
				.wait(1)
				.to({ x: 483.2 }, 0)
				.wait(1)
				.to({ x: 483.7 }, 0)
				.wait(1)
				.to({ x: 484.2 }, 0)
				.wait(1)
				.to({ x: 484.7 }, 0)
				.wait(1)
				.to({ x: 485.2 }, 0)
				.wait(1)
				.to({ x: 485.7 }, 0)
				.wait(1)
				.to({ x: 486.2 }, 0)
				.wait(1)
				.to({ x: 486.75 }, 0)
				.wait(1)
				.to({ x: 487.25 }, 0)
				.wait(1)
				.to({ x: 487.75 }, 0)
				.wait(1)
				.to({ x: 488.25 }, 0)
				.wait(1)
				.to({ x: 488.75 }, 0)
				.wait(1)
				.to({ x: 489.25 }, 0)
				.wait(1)
				.to({ x: 489.75 }, 0)
				.wait(1)
				.to({ x: 490.25 }, 0)
				.wait(1)
				.to({ x: 490.75 }, 0)
				.wait(1)
				.to({ x: 491.25 }, 0)
				.wait(1)
				.to({ x: 491.75 }, 0)
				.wait(1)
				.to({ x: 492.25 }, 0)
				.wait(1)
				.to({ x: 492.7 }, 0)
				.wait(1)
				.to({ x: 493.2 }, 0)
				.wait(1)
				.to({ x: 493.7 }, 0)
				.wait(1)
				.to({ x: 494.15 }, 0)
				.wait(1)
				.to({ x: 494.65 }, 0)
				.wait(1)
				.to({ x: 495.1 }, 0)
				.wait(1)
				.to({ x: 495.6 }, 0)
				.wait(1)
				.to({ x: 496.05 }, 0)
				.wait(1)
				.to({ x: 496.5 }, 0)
				.wait(1)
				.to({ x: 496.95 }, 0)
				.wait(1)
				.to({ x: 497.4 }, 0)
				.wait(1)
				.to({ x: 497.85 }, 0)
				.wait(1)
				.to({ x: 498.3 }, 0)
				.wait(1)
				.to({ x: 498.75 }, 0)
				.wait(1)
				.to({ x: 499.15 }, 0)
				.wait(1)
				.to({ x: 499.6 }, 0)
				.wait(1)
				.to({ x: 500 }, 0)
				.wait(1)
				.to({ x: 500.45 }, 0)
				.wait(1)
				.to({ x: 500.85 }, 0)
				.wait(1)
				.to({ x: 501.25 }, 0)
				.wait(1)
				.to({ x: 501.6 }, 0)
				.wait(1)
				.to({ x: 502 }, 0)
				.wait(1)
				.to({ x: 502.35 }, 0)
				.wait(1)
				.to({ x: 502.75 }, 0)
				.wait(1)
				.to({ x: 503.1 }, 0)
				.wait(1)
				.to({ x: 503.4 }, 0)
				.wait(1)
				.to({ x: 503.75 }, 0)
				.wait(1)
				.to({ x: 504.05 }, 0)
				.wait(1)
				.to({ x: 504.4 }, 0)
				.wait(1)
				.to({ x: 504.7 }, 0)
				.wait(1)
				.to({ x: 504.95 }, 0)
				.wait(1)
				.to({ x: 505.2 }, 0)
				.wait(1)
				.to({ x: 505.45 }, 0)
				.wait(1)
				.to({ x: 505.7 }, 0)
				.wait(1)
				.to({ x: 505.9 }, 0)
				.wait(1)
				.to({ x: 506.1 }, 0)
				.wait(1)
				.to({ x: 506.25 }, 0)
				.wait(1)
				.to({ x: 506.4 }, 0)
				.wait(1)
				.to({ x: 506.55 }, 0)
				.wait(1)
				.to({ x: 506.6 }, 0)
				.wait(1)
				.to({ x: 506.7 }, 0)
				.wait(3)
				.to({ x: 506.6 }, 0)
				.wait(1)
				.to({ x: 506.5 }, 0)
				.wait(1)
				.to({ x: 506.4 }, 0)
				.wait(1)
				.to({ x: 506.2 }, 0)
				.wait(1)
				.to({ x: 506 }, 0)
				.wait(1)
				.to({ x: 505.8 }, 0)
				.wait(1)
				.to({ x: 505.5, y: 129.95 }, 0)
				.wait(1)
				.to({ x: 505.25 }, 0)
				.wait(1)
				.to({ x: 504.9 }, 0)
				.wait(1)
				.to({ x: 504.55 }, 0)
				.wait(1)
				.to({ x: 504.2 }, 0)
				.wait(1)
				.to({ x: 503.8 }, 0)
				.wait(1)
				.to({ x: 503.4 }, 0)
				.wait(1)
				.to({ x: 503 }, 0)
				.wait(1)
				.to({ x: 502.55 }, 0)
				.wait(1)
				.to({ x: 502.05 }, 0)
				.wait(1)
				.to({ x: 501.6 }, 0)
				.wait(1)
				.to({ x: 501.1 }, 0)
				.wait(1)
				.to({ x: 500.6, y: 129.9 }, 0)
				.wait(1)
				.to({ x: 500.05 }, 0)
				.wait(1)
				.to({ x: 499.55 }, 0)
				.wait(1)
				.to({ x: 499 }, 0)
				.wait(1)
				.to({ x: 498.4 }, 0)
				.wait(1)
				.to({ x: 497.85 }, 0)
				.wait(1)
				.to({ x: 497.3 }, 0)
				.wait(1)
				.to({ x: 496.7 }, 0)
				.wait(1)
				.to({ x: 496.1, y: 129.85 }, 0)
				.wait(1)
				.to({ x: 495.5 }, 0)
				.wait(1)
				.to({ x: 494.9 }, 0)
				.wait(1)
				.to({ x: 494.3 }, 0)
				.wait(1)
				.to({ x: 493.7 }, 0)
				.wait(1)
				.to({ x: 493.05 }, 0)
				.wait(1)
				.to({ x: 492.45 }, 0)
				.wait(1)
				.to({ x: 491.85 }, 0)
				.wait(1)
				.to({ x: 491.2, y: 129.8 }, 0)
				.wait(1)
				.to({ x: 490.6 }, 0)
				.wait(1)
				.to({ x: 490 }, 0)
				.wait(1)
				.to({ x: 489.35 }, 0)
				.wait(1)
				.to({ x: 488.75 }, 0)
				.wait(1)
				.to({ x: 488.15 }, 0)
				.wait(1)
				.to({ x: 487.55 }, 0)
				.wait(1)
				.to({ x: 486.95 }, 0)
				.wait(1)
				.to({ x: 486.35, y: 129.75 }, 0)
				.wait(1)
				.to({ x: 485.75 }, 0)
				.wait(1)
				.to({ x: 485.2 }, 0)
				.wait(1)
				.to({ x: 484.6 }, 0)
				.wait(1)
				.to({ x: 484.05 }, 0)
				.wait(1)
				.to({ x: 483.5 }, 0)
				.wait(1)
				.to({ x: 482.95 }, 0)
				.wait(1)
				.to({ x: 482.45 }, 0)
				.wait(1)
				.to({ x: 481.9 }, 0)
				.wait(1)
				.to({ x: 481.4 }, 0)
				.wait(1)
				.to({ x: 480.95, y: 129.7 }, 0)
				.wait(1)
				.to({ x: 480.45 }, 0)
				.wait(1)
				.to({ x: 480 }, 0)
				.wait(1)
				.to({ x: 479.6 }, 0)
				.wait(1)
				.to({ x: 479.2 }, 0)
				.wait(1)
				.to({ x: 478.8 }, 0)
				.wait(1)
				.to({ x: 478.45 }, 0)
				.wait(1)
				.to({ x: 478.1 }, 0)
				.wait(1)
				.to({ x: 477.8 }, 0)
				.wait(1)
				.to({ x: 477.5 }, 0)
				.wait(1)
				.to({ x: 477.25 }, 0)
				.wait(1)
				.to({ x: 477 }, 0)
				.wait(1)
				.to({ x: 476.85 }, 0)
				.wait(1)
				.to({ x: 476.7 }, 0)
				.wait(1)
				.to({ x: 476.55 }, 0)
				.wait(1),
		);

		this._renderFirstFrame();
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(
		-258.5,
		-198.7,
		1780.1,
		730.9000000000001,
	);
	// library properties:
	lib.properties = {
		id: "72F31726DD93425FA2DF386E622E1499",
		width: 900,
		height: 148,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.0,
		manifest: [
			{
				src: "./assets/polecamy/Baner_magazyn_atlas_1.png",
				id: "Baner_magazyn_atlas_1",
			},
		],
		preloads: [],
	};

	// bootstrap callback support:

	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	};
	p.play = function () {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
	};
	p.stop = function (ms) {
		if (ms) this.seek(ms);
		this.tickEnabled = false;
	};
	p.seek = function (ms) {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
	};
	p.getDuration = function () {
		return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
	};

	p.getTimelinePosition = function () {
		return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
	};

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}

	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions["72F31726DD93425FA2DF386E622E1499"] = {
		getStage: function () {
			return exportRoot.stage;
		},
		getLibrary: function () {
			return lib;
		},
		getSpriteSheet: function () {
			return ss;
		},
		getImages: function () {
			return img;
		},
	};

	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	};

	an.getComposition = function (id) {
		return an.compositions[id];
	};

	an.makeResponsive = function (
		isResp,
		respDim,
		isScale,
		scaleType,
		domContainers,
	) {
		var lastW,
			lastH,
			lastS = 1;
		window.addEventListener("resize", resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width,
				h = lib.properties.height;
			var iw = window.innerWidth,
				ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1,
				xRatio = iw / w,
				yRatio = ih / h,
				sRatio = 1;
			if (isResp) {
				if (
					(respDim == "width" && lastW == iw) ||
					(respDim == "height" && lastH == ih)
				) {
					sRatio = lastS;
				} else if (!isScale) {
					if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
				} else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				} else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			domContainers[0].width = w * pRatio * sRatio;
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function (container) {
				container.style.width = w * sRatio + "px";
				container.style.height = h * sRatio + "px";
			});
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw;
			lastH = ih;
			lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	};
	an.handleSoundStreamOnTick = function (event) {
		if (!event.paused) {
			var stageChild = stage.getChildAt(0);
			if (!stageChild.paused || stageChild.ignorePause) {
				stageChild.syncStreamSounds();
			}
		}
	};
	an.handleFilterCache = function (event) {
		if (!event.paused) {
			var target = event.target;
			if (target) {
				if (target.filterCacheList) {
					for (var index = 0; index < target.filterCacheList.length; index++) {
						var cacheInst = target.filterCacheList[index];
						if (
							cacheInst.startFrame <= target.currentFrame &&
							target.currentFrame <= cacheInst.endFrame
						) {
							cacheInst.instance.cache(
								cacheInst.x,
								cacheInst.y,
								cacheInst.w,
								cacheInst.h,
							);
						}
					}
				}
			}
		}
	};
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
