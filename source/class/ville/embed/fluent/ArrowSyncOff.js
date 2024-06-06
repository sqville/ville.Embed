/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowSyncOff",
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

   var pathdregular = "M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1c-1.3.07-2.6.48-3.73 1.23l.73.73a6.49 6.49 0 0 1 3.55-.98L8.59 5.05a.5.5 0 0 0 .7.7l2.12-2.11ZM4.35 5.06a7.5 7.5 0 0 0 1.16 10.95.5.5 0 0 0 .6-.8 6.5 6.5 0 0 1-1.04-9.44l9.16 9.17a6.48 6.48 0 0 1-4.37 1.56l1.55-1.55a.5.5 0 1 0-.7-.7l-2.12 2.11a.5.5 0 0 0 0 .71l2.12 2.12a.5.5 0 0 0 .7-.7l-1-1a7.47 7.47 0 0 0 4.53-1.85l2.2 2.21a.5.5 0 0 0 .71-.7l-15-15a.5.5 0 1 0-.7.7l2.2 2.21ZM15.3 4.7a7.5 7.5 0 0 1 .96 9.44l-.73-.73A6.5 6.5 0 0 0 13.9 4.8a.5.5 0 1 1 .6-.8c.29.21.56.45.81.7Z";
   var pathdfilled = "M9.89 3.75a6.24 6.24 0 0 0-3.12.9L5.68 3.56a7.73 7.73 0 0 1 3.67-1.28l-.59-.59A.75.75 0 0 1 9.82.63l2.12 2.12c.3.3.3.77 0 1.06L9.82 5.93a.75.75 0 0 1-1.06-1.06L9.9 3.75ZM4.18 4.88a7.75 7.75 0 0 0 1.18 11.33.75.75 0 1 0 .9-1.2 6.25 6.25 0 0 1-1.02-9.06l8.81 8.8a6.23 6.23 0 0 1-3.94 1.5l1.13-1.12a.75.75 0 0 0-1.06-1.07L8.06 16.2c-.3.29-.3.76 0 1.06l2.12 2.12a.75.75 0 1 0 1.06-1.06l-.59-.59a7.72 7.72 0 0 0 4.47-1.9l2.03 2.03a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7l2.03 2.03Zm11.17 8.35 1.09 1.09a7.75 7.75 0 0 0-1.8-10.53.75.75 0 0 0-.9 1.2 6.25 6.25 0 0 1 1.6 8.24Z";
   
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