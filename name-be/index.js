const express = require('express');
const cron = require('cron');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const Block = require('./block.model');

dotenv.config({path: './config.env'})

const app = express();
const port = process.env.PORT || 8080;

// Kết nối tới MongoDB

// Cấu hình CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Cho phép truy cập từ mọi nguồn
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

mongoose.connect(process.env.DATABASE)
.then(con => {
    console.log('DB connection successfully');

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });

    const insertDataJob = new cron.CronJob('*/2 * * * *',async () => {
        // Thực hiện việc chèn dữ liệu vào cơ sở dữ liệu ở đây
        console.log('Start');
        const randomData = generateRandomData();
        try{
            const block = new Block(randomData);
            const blockAdd = await block.save();
            console.log('Inserted data:', blockAdd);
        }catch(error){
            console.error('Failed to insert data:', error);

        }
        
    });
    
      // Khởi động công việc
      insertDataJob.start();

      app.get('/api/blocks', async(req, res) => {
        // Truy vấn dữ liệu từ cơ sở dữ liệu và trả về dữ liệu của mục "Blocks" ở đây
        try{
          const blocks = await Block.find();
          console.log("blocks: ",blocks)
          res.status(200).json(blocks);
        }catch(e){
          res.status(500).json({error: e});
      
        }
       
      });
    
});


// Hàm tạo dữ liệu ngẫu nhiên
function generateRandomData() {
  // Implement logic để tạo dữ liệu ngẫu nhiên của bạn ở đây
  return {
    blockHeight: getRandomNumber(),
    miner: getRandomString(),
    transactions: getRandomNumber(),
    size: getRandomNumber(),
    timestamp: getCurrentTimestamp(),
    reward: getRandomNumber(),
    gasLimit: getRandomNumber(),
    gasUsed: getRandomNumber()
  };
}

// Hàm lấy một số ngẫu nhiên từ 1 đến 100
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Hàm tạo một chuỗi ngẫu nhiên
function getRandomString() {
  return Math.random().toString(36).substring(7);
}

// Hàm lấy dấu thời gian hiện tại
function getCurrentTimestamp() {
  return new Date().toISOString();
}

// Định nghĩa các tuyến API


// Khởi động máy chủ Express
