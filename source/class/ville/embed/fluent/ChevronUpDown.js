/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChevronUpDown",
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

   var pathdregular = "M14.91 7.22a.5.5 0 0 1-.76.63L10 3.71 5.85 7.85l-.07.06a.5.5 0 0 1-.63-.76l4.5-4.5.07-.06a.5.5 0 0 1 .63.06l4.5 4.5.06.07ZM5.1 12.78a.5.5 0 0 1 .76-.63L10 16.29l4.15-4.14.07-.06a.5.5 0 0 1 .63.76l-4.5 4.5-.07.06a.5.5 0 0 1-.63-.06l-4.5-4.5-.06-.07Z";
   var pathdfilled = "M10.53 2.72a.75.75 0 0 0-1.06 0L5.22 6.97a.75.75 0 0 0 1.06 1.06L10 4.31l3.72 3.72a.75.75 0 1 0 1.06-1.06l-4.25-4.25Zm4.25 10.31-4.25 4.25c-.3.3-.77.3-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L10 15.69l3.72-3.72a.75.75 0 1 1 1.06 1.06Z";
   
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