/* ************************************************************************

SQville

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (sqville) sqville@gmail.com

************************************************************************ */

/**
 * NOTE: Instances of this class must be disposed of after use
 *
 */
 qx.Class.define("ville.embed.fluent.CalendarMonth",
 {
   extend : ville.embed.fluent.Abstract,

   construct (iconstyle)
   {
    super();

    if (iconstyle != null)
      this.setIconStyle(iconstyle);

    var pathdregular = "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5ZM7 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z";
    var pathdfilled = "M 14.5 3 A 2.5 2.5 0 0 1 17 5.5 v 9 a 2.5 2.5 0 0 1 -2.5 2.5 h -9 A 2.5 2.5 0 0 1 3 14.5 v -9 A 2.5 2.5 0 0 1 5.5 3 h 9 Z M 7 11 a 1 1 0 1 0 0 2 a 1 1 0 0 0 0 -2 Z m 3 0 a 1 1 0 1 0 0 2 a 1 1 0 0 0 0 -2 Z M 7 7 a 1 1 0 1 0 0 2 a 1 1 0 0 0 0 -2 Z m 3 0 a 1 1 0 1 0 0 2 a 1 1 0 0 0 0 -2 Z m 3 0 a 1 1 0 1 0 0 2 a 1 1 0 0 0 0 -2 Z";
    
    //prep regular
    this._htmlregular = this.svgit(this.pathit(pathdregular));

    //prep filled
    this._htmlfilled = this.svgit(this.pathit(pathdfilled));
    
    if (this.getIconStyle() == "filled")
      this.setHtml(this._htmlfilled);
    else 
      this.setHtml(this._htmlregular);
  }
 });