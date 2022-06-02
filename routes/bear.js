var express = require('express');
var router = express.Router();


// [GET] : restaurant kpi
router.get('/api/v1/bear/kpi/restaurant', function(req, res, next) {
  res.send('restaurant kpi');
});

// [GET] : payment kpi
router.get('/api/v1/bear/kpi/payment', function(req, res, next) {
  res.send('payment kpi');
});

// [GET] : partysize kpi
router.get('/api/v1/bear/kpi/partysize', function(req, res, next) {
  res.send('partysize kpi');
});




// [GET] : 그룹 리스트 보기
router.get('/api/v1/bear/groups', function(req, res, next) {
  res.send('그룹 리스트');
});

// [POST] : 그룹 추가
router.post('/api/v1/bear/groups', function(req, res, next) {
  res.send('그룹 생성');
});


// [GET] : id로 개별 그룹 보기
router.get('/api/v1/bear/groups/:pk', function(req, res, next) {
  res.send('그룹 디테일');
});

// [PUT] : id로 개별 그룹 정보 업데이트
router.put('/api/v1/bear/groups/:pk', function(req, res, next) {
  res.send('그룹 업데이트');
});

// [DELETE] : id로 개별 그룹 삭제
router.delete('/api/v1/bear/groups/:pk', function(req, res, next) {
  res.send('그룹 삭제');
});


// [GET] : 점포 리스트 보기
router.get('/api/v1/bear/restaurants', function(req, res, next) {
  res.send('점포 리스트');
});

// [POST] : 점포 추가
router.post('/api/v1/bear/restaurants', function(req, res, next) {
  res.send('점포 생성');
});


// [GET] : id로 개별 점포 보기
router.get('/api/v1/bear/restaurants/:pk', function(req, res, next) {
  res.send('점포 디테일');
});

// [PUT] : id로 개별 점포 정보 업데이트
router.put('/api/v1/bear/restaurants/:pk', function(req, res, next) {
  res.send('점포 업데이트');
});

// [DELETE] : id로 개별 점포 삭제
router.delete('/api/v1/bear/restaurants/:pk', function(req, res, next) {
  res.send('점포 삭제');
});


module.exports = router;
