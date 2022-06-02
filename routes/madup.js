var express = require('express');
var router = express.Router();


// [GET] 광고주 id와 기간으로 매체별 통계량 리턴
//   - params = "advertiser_id", "start_date", "end_date"
router.get('/api/v1/madup/analysis', function(req, res, next) {
  res.send('광고데이터 분석');
});


// [GET] : 광고주 리스트 보기
router.get('/api/v1/madup/advertisers', function(req, res, next) {
  res.send('광고주 리스트');
});

// [POST] : 광고주 추가
router.post('/api/v1/madup/advertisers', function(req, res, next) {
  res.send('광고주 생성');
});


// [GET] : id로 개별 광고주 보기
router.get('/api/v1/madup/advertisers/:pk', function(req, res, next) {
  res.send('광고주 디테일');
});

// [PUT] : id로 개별 광고주 정보 업데이트
router.put('/api/v1/madup/advertisers/:pk', function(req, res, next) {
  res.send('광고주 업데이트');
});

// [DELETE] : id로 개별 광고주 삭제
router.delete('/api/v1/madup/advertisers/:pk', function(req, res, next) {
  res.send('광고주 삭제');
});


module.exports = router;