import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Обновление состояния, чтобы отобразить fallback UI
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo }); // Логируем ошибку для отладки
    console.error("Ошибка в компоненте:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Что-то пошло не так. Пожалуйста, попробуйте позже.</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;