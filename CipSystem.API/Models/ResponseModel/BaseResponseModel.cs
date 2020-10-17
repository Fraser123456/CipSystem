namespace CipSystem.API.Models.ResponseModel
{
    public class BaseResponseModel
    {
        public string Type { get; set; }
        public object ViewModel { get; set; }
        public string Message { get; set; }
    }
}