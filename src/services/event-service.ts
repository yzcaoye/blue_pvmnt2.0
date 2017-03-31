import { Injectable } from '@angular/core';

import { MOCK_EVENTS } from '../mocks/mock-events';

@Injectable()
export class EventService {
	fetch() {
		return MOCK_EVENTS;
	}
}