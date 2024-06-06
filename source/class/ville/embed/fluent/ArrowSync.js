/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowSync",
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

   var pathdregular = "M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1a7.5 7.5 0 0 0-4.08 13.5.5.5 0 0 0 .6-.8A6.5 6.5 0 0 1 10.14 3.5L8.59 5.04a.5.5 0 0 0 .7.7l2.12-2.11ZM8.6 16.36a.5.5 0 0 0 0 .71l2.12 2.12a.5.5 0 0 0 .7-.7l-1-1a7.5 7.5 0 0 0 4.07-13.5.5.5 0 1 0-.59.8A6.5 6.5 0 0 1 9.86 16.5l1.55-1.55a.5.5 0 1 0-.7-.7l-2.12 2.11Z";
   var pathdfilled = "M9.89 3.75a6.25 6.25 0 0 0-3.63 11.26.75.75 0 0 1-.9 1.2 7.75 7.75 0 0 1 4-13.93l-.6-.59A.75.75 0 0 1 9.82.63l2.12 2.12c.3.3.3.77 0 1.06L9.82 5.93a.75.75 0 0 1-1.06-1.06L9.9 3.75Zm.22 12.5a6.25 6.25 0 0 0 3.63-11.26.75.75 0 0 1 .9-1.2 7.75 7.75 0 0 1-4 13.93l.6.59a.75.75 0 1 1-1.06 1.06l-2.12-2.12a.75.75 0 0 1 0-1.06l2.12-2.13a.75.75 0 1 1 1.06 1.07l-1.13 1.12Z";
   
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