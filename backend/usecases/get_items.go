/*
	The Service frontend is UI on a page. Each Service has a ServiceRepository
	and its usecases data. The architecture groundwork is the usecases that
	orchestrate everything relevant to the frontend. The usecases do not
	need to know underlying database nor transpotation layer. 
	At directory we run ~/usecases$ go test
*/
package usecases

import (
//	"github.com/khaiphong/mu/backend/entities"
)

func GetItems() {
}

/*
	Commerce usecases may contain coded Home pages for commerce, Mu (Miss U /
	Twitter clone) messages for the user and/or the user's messages to the
	Twitter clone. It also includes the list
	of displayed pages to the user's Activities, Relationships, Places,
	Commerce Command, EIP, and anything relating to MyIntuition for Big-Data
	AI.
*/