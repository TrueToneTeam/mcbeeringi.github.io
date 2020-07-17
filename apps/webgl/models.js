function model(value) {
	if(value==0){//blocks
		pos = [
			-1.,1.,-1.,1., 0.,1.,-1.,1.,  -1.,1.,0.,1., 0.,1.,0.,1.,
			-1.,0.,-1.,1., 0.,0.,-1.,1., 1.,0.,-1.,1.,  -1.,0.,0.,1., 0.,0.,0.,1., 1.,0.,0.,1.,  -1.,0.,1.,1., 0.,0.,1.,1.,
			-1.,-1.,-1.,1., 0.,-1.,-1.,1., 1.,-1.,-1.,1.,  -1.,-1.,0.,1., 0.,-1.,0.,1., 1.,-1.,0.,1.,  -1.,-1.,1.,1., 0.,-1.,1.,1.
		];
		col = [
			.6,.6,.6,1., .8,.8,.8,1.,  .8,.8,.8,1., 1.,1.,1.,1.,
			.4,.4,.4,1., .6,.6,.6,1., .8,.8,.8,1.,  .6,.6,.6,1., .8,.8,.8,1., 1.,1.,1.,1.,  .8,.8,.8,1., 1.,1.,1.,1.,
			.2,.2,.2,1., .4,.4,.4,1., .6,.6,.6,1.,  .4,.4,.4,1., .6,.6,.6,1., .8,.8,.8,1.,  .6,.6,.6,1., .8,.8,.8,1.
		];
		uv1 = [
			1.,1., 1.,1., 1.,1., 1.,1.,
			1.,1., 1.,1., 1.,1., 1.,1., 1.,1., 1.,1., 1.,1., 1.,1.,
			1.,1., 1.,1., 1.,1., 1.,1., 1.,1., 1.,1., 1.,1., 1.,1.
		];
		index = [
			2,1,0, 1,2,3,  7,3,2, 3,7,8, 8,1,3, 1,8,5, 5,0,1, 0,5,4, 4,2,0, 2,4,7,
			10,8,7, 8,10,11, 8,6,5, 6,8,9,  18,11,10, 11,18,19, 19,8,11, 8,19,16, 16,9,8, 9,16,17, 17,6,9, 6,17,14, 14,5,6, 5,14,13, 13,4,5, 4,13,12, 12,7,4, 7,12,15, 15,10,7, 10,15,18,
			13,15,12, 15,13,16, 14,16,13, 16,14,17, 16,18,15, 18,16,19
		];
	}
	else if(value==1){//plane
		pos = [
			-2.,0.,-2.,1.,  -1.,0.,-2.,1.,  0.,0.,-2.,1.,  1.,0.,-2.,1.,  2.,0.,-2.,1.,
			-2.,0.,-1.,1.,  -1.,0.,-1.,1.,  0.,0.,-1.,1.,  1.,0.,-1.,1.,  2.,0.,-1.,1.,
			-2.,0., 0.,1.,  -1.,0., 0.,1.,  0.,0., 0.,1.,  1.,0., 0.,1.,  2.,0., 0.,1.,
			-2.,0., 1.,1.,  -1.,0., 1.,1.,  0.,0., 1.,1.,  1.,0., 1.,1.,  2.,0., 1.,1.,
			-2.,0., 2.,1.,  -1.,0., 2.,1.,  0.,0., 2.,1.,  1.,0., 2.,1.,  2.,0., 2.,1.
		];
		col = [
			1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1.,
			1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1.,
			1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1.,
			1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1.,
			1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1.
		];
		uv1 = [
			1.,1., 1.,1., 1.,1., 1.,1., 1.,1.,
			1.,1., 1.,1., 1.,1., 1.,1., 1.,1.,
			1.,1., 1.,1., 1.,1., 1.,1., 1.,1.,
			1.,1., 1.,1., 1.,1., 1.,1., 1.,1.,
			1.,1., 1.,1., 1.,1., 1.,1., 1.,1.
		];
		index = [
			 6, 0, 5, 0, 6, 1,  7, 1, 6, 1, 7, 2,  8, 2, 7, 2, 8, 3,  9, 3, 8, 3, 9, 4,
			11, 5,10, 5,11, 6, 12, 6,11, 6,12, 7, 13, 7,12, 7,13, 8, 14, 8,13, 8,14, 9,
			16,10,15,10,16,11, 17,11,16,11,17,12, 18,12,17,12,18,13, 19,13,18,13,19,14,
			21,15,20,15,21,16, 22,16,21,16,22,17, 23,17,22,17,23,18, 24,18,23,18,24,19
		];
	}
	else if(value==2){//tri
		pos = [
			0.,0.,0.,1., 1.,0.,0.,1., 0.,1.,0.,1., 0.,0.,1.,1.
		];
		col = [
			0.,0.,0.,1., 1.,1.,1.,1., 1.,1.,1.,1., 1.,1.,1.,1.
		];
		uv1 = [
			1.,1., 1.,1., 1.,1., 1.,1.
		];
		index = [
			0,2,1, 0,3,2, 0,1,3, 1,2,3
		];
	}
}
