export class FacilityNotify {
  fillNotifyText(message: string): void {
    cy.get("#NotifyModalMessageInput").should("be.visible").type(message);
  }

  visitNoticeBoard(): void {
    cy.get("a[href='/notice_board']").should("be.visible").click();
  }

  visitNotificationSideBar(): void {
    cy.get("#notification-slide-btn").should("be.visible").click();
  }

  interceptFacilitySearchReq(): void {
    cy.intercept("GET", "**/api/v1/facility/**").as("searchFacility");
  }
  verifyFacilitySearchReq(): void {
    cy.wait("@searchFacility").its("response.statusCode").should("eq", 200);
  }

  interceptPostNotificationReq(): void {
    cy.intercept("POST", "**/api/v1/notification/notify").as("notifyFacility");
  }

  verifyPostNotificationReq(): void {
    cy.wait("@notifyFacility").its("response.statusCode").should("eq", 204);
  }

  interceptGetNotificationReq(): void {
    cy.intercept("GET", "**/api/v1/notification/**").as("getNotifications");
  }

  verifyGetNotificationReq(): void {
    cy.wait("@getNotifications").its("response.statusCode").should("eq", 200);
  }
}
