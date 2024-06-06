/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BranchForkHint",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M6 2a3 3 0 0 0-.5 5.96v3.79a.5.5 0 0 0 1 0V11H12a2.5 2.5 0 0 0 2.5-2.5v-.54a3 3 0 1 0-1 0v.54c0 .83-.67 1.5-1.5 1.5H6.5V7.96A3 3 0 0 0 6 2Zm8 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-1.13 6.4a.5.5 0 1 0-.58-.8 3.02 3.02 0 0 0-1.12 1.54.5.5 0 1 0 .96.3 1.99 1.99 0 0 1 .74-1.03Zm2.9-.8a.5.5 0 1 0-.57.8 2.02 2.02 0 0 1 .75 1.04.5.5 0 1 0 .95-.3 2.99 2.99 0 0 0-1.12-1.55ZM4.3 16a.5.5 0 0 0-.88.5 3 3 0 0 0 1.38 1.27.5.5 0 1 0 .42-.91 2 2 0 0 1-.92-.85Zm4.37.5a.5.5 0 0 0-.87-.5 2 2 0 0 1-.98.88.5.5 0 1 0 .38.92 3 3 0 0 0 1.47-1.3Z";
   var pathdfilled = "M6 2a3 3 0 0 0-.5 5.96v3.79a.5.5 0 0 0 1 0V11H12a2.5 2.5 0 0 0 2.5-2.5v-.54a3 3 0 1 0-1 0v.54c0 .83-.67 1.5-1.5 1.5H6.5V7.96A3 3 0 0 0 6 2ZM4.87 13.4a.5.5 0 1 0-.58-.8 3.02 3.02 0 0 0-1.12 1.54.5.5 0 1 0 .96.3 1.99 1.99 0 0 1 .74-1.03Zm2.9-.8a.5.5 0 1 0-.57.8 2.02 2.02 0 0 1 .75 1.04.5.5 0 1 0 .95-.3 2.99 2.99 0 0 0-1.12-1.55ZM4.3 16a.5.5 0 0 0-.88.5 3 3 0 0 0 1.38 1.27.5.5 0 1 0 .42-.91 2 2 0 0 1-.92-.85Zm4.37.5a.5.5 0 0 0-.87-.5 2 2 0 0 1-.98.88.5.5 0 1 0 .38.92 3 3 0 0 0 1.47-1.3Z";
   
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