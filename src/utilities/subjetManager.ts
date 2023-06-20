import { Subject } from "rxjs";

export class SubjetManager {
	subjet$ = new Subject()

	getSubject() {

		return this.subjet$.asObservable()
	}

	setSubjet<T>(value: T) {
		this.subjet$.next(value)
	}
	unsubscribe() {
		this.subjet$.unsubscribe()
	}
}