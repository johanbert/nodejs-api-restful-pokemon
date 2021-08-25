"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandlerMiddleware {
    // bad request handler middleware
    badRequestHandler(error, req, res, next) {
        error = new Error("Not found");
        error.status = 404;
        next(error);
    }
    // error handler middleware
    errorHandler(error, req, res, next) {
        res.status(error.status || 500).send({
            error: {
                status: error.status || 500,
                message: error.message || 'Internal Server Error',
            },
        });
    }
}
exports.default = new ErrorHandlerMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JoYW5kbGVyLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21tb24vbWlkZGxld2FyZXMvZXJyb3JoYW5kbGVyLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFNLHNCQUFzQjtJQUUxQixpQ0FBaUM7SUFDakMsaUJBQWlCLENBQUUsS0FBWSxFQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtRQUNyRyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0IsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELDJCQUEyQjtJQUMzQixZQUFZLENBQUUsS0FBWSxFQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtRQUNoRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25DLEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxHQUFHO2dCQUMzQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSx1QkFBdUI7YUFDbEQ7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFDRCxrQkFBZSxJQUFJLHNCQUFzQixFQUFFLENBQUMifQ==