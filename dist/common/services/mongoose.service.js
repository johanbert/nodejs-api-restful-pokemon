"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
const config_1 = require("../../config/");
const log = debug_1.default('app:mongoose-service');
class MongooseService {
    constructor() {
        this.count = 0;
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            useFindAndModify: false,
        };
        this.connection = `${config_1.DBS.MONGODB.HOST}://${config_1.DBS.MONGODB.SERVER}/${config_1.DBS.MONGODB.NAME}`;
        this.connectWithRetry = () => {
            log('Attempting MongoDB connection (will retry if needed)');
            mongoose_1.default
                .connect(this.connection, this.mongooseOptions)
                .then(() => {
                log('MongoDB is connected', this.connection);
            })
                .catch((err) => {
                const retrySeconds = 15;
                log(`MongoDB connection unsuccessful (will retry #${++this
                    .count} after ${retrySeconds} seconds):`, err);
                log(this.connection);
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tb25nb29zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLGtEQUEwQjtBQUMxQiwwQ0FBb0M7QUFDcEMsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sZUFBZTtJQVVqQjtRQVRRLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixvQkFBZSxHQUFHO1lBQ3RCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5QixnQkFBZ0IsRUFBRSxLQUFLO1NBQzFCLENBQUM7UUFDTSxlQUFVLEdBQUcsR0FBRyxZQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxZQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxZQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO1FBVXRGLHFCQUFnQixHQUFHLEdBQUcsRUFBRTtZQUNwQixHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztZQUM1RCxrQkFBUTtpQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDO2lCQUM5QyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNQLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNYLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFDeEIsR0FBRyxDQUNDLGdEQUFnRCxFQUFFLElBQUk7cUJBQ2pELEtBQUssVUFBVSxZQUFZLFlBQVksRUFDNUMsR0FBRyxDQUNOLENBQUM7Z0JBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDcEIsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7UUF4QkUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLGtCQUFRLENBQUM7SUFDcEIsQ0FBQztDQW9CSjtBQUNELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==