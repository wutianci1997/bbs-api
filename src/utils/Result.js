class Result {
  /**
   * @description - http status code 200 请求成功
   * @param {any} data
   * @returns {{data:any}}
   */
  static status_code_200(data) {
    return {
      data,
    };
  }
  /**
   * @description - http status code 401 没有权限
   * @returns {{message:string}}
   */
  static status_code_401(message = "没有权限访问，请联系管理员。") {
    return {
      message,
    };
  }
  /**
   * @description - http status code 500 服务器错误
   * @param {string} message
   * @returns {{message:string}}
   */
  static status_code_500(message = "服务器错误") {
    return {
      message,
    };
  }
  /**
   * @description - http status code 404 未找到指定路径
   * @param {string} message
   * @returns {{message:string}}
   */
  static status_code_404(message = "未找到指定路径") {
    return {
      message,
    };
  }
}

export { Result };
