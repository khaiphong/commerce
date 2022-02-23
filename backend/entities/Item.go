/*
	K-V data are sorted by keys. Use prefix attached to consecutive or random
	key for fast sorted owners. All Services work with Item/Items like todo.
	Plan is list of todos, Project is list of Plan, etc.
*/
package entities

var Item struct {
	Title string
	Description string
	IsCompleted bool
}