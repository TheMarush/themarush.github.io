import type { ReactiveController, ReactiveControllerHost } from "lit";

class ModalController implements ReactiveController {
  host: ReactiveControllerHost;
  message = "";
  image = "";
  isOpen = false;
  isClosing = false;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  show(message: string, image?: string) {
    this.message = message;
    this.image = image || "";
    this.isOpen = true;
    this.isClosing = false;
    this.host.requestUpdate();
  }

  close() {
    this.isClosing = true;
    this.host.requestUpdate();
    setTimeout(() => {
      this.isOpen = false;
      this.isClosing = false;
      this.host.requestUpdate();
    }, 200);
  }

  hostConnected() {}
  hostDisconnected() {}
}

export { ModalController };
