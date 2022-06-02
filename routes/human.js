var express = require('express');
var router = express.Router();


// [GET] : 임상정보 리스트 보기
router.get('/api/v1/human/researches', function(req, res, next) {
  res.send('임상정보 리스트');
});

// [POST] : 임상정보 추가
router.post('/api/v1/human/researches', function(req, res, next) {
  res.send('임상정보 생성');
});


// [GET] : id로 개별 임상정보 보기
router.get('/api/v1/human/researches/:pk', function(req, res, next) {
  res.send('임상정보 디테일');
});

// [PUT] : id로 개별 임상정보 정보 업데이트
router.put('/api/v1/human/researches/:pk', function(req, res, next) {
  res.send('임상정보 업데이트');
});

// [DELETE] : id로 개별 임상정보 삭제
router.delete('/api/v1/human/researches/:pk', function(req, res, next) {
  res.send('임상정보 삭제');
});


module.exports = router;
