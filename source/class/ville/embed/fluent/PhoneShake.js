/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneShake",
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

   var pathdregular = "M15.37 2.93a.5.5 0 1 1 .5-.86 4.25 4.25 0 0 1 1.63 5.66.5.5 0 0 1-.88-.47 3.25 3.25 0 0 0-1.25-4.33Zm-1 1.74a.5.5 0 1 1 .5-.87c1.02.59 1.4 1.86.91 2.9a.5.5 0 0 1-.9-.42c.27-.58.06-1.29-.5-1.61Zm-9.74 12.4a.5.5 0 1 1-.5.86 4.25 4.25 0 0 1-1.63-5.66.5.5 0 1 1 .88.46 3.25 3.25 0 0 0 1.25 4.33Zm1-1.74a.5.5 0 1 1-.5.87 2.25 2.25 0 0 1-.92-2.9.5.5 0 0 1 .9.42c-.26.58-.05 1.28.52 1.61Zm5.97-10.6a.96.96 0 0 0-1.17-.7l-3.7 1.01c-.52.14-.84.7-.7 1.25l2.37 8.98c.14.53.67.83 1.18.7l3.68-1.01c.53-.15.85-.7.7-1.25L11.6 4.73Zm-1.43-1.66a1.95 1.95 0 0 1 2.4 1.4l2.36 8.97a2.04 2.04 0 0 1-1.41 2.48l-3.69 1a1.95 1.95 0 0 1-2.4-1.4L5.07 6.57a2.04 2.04 0 0 1 1.41-2.49l3.69-1Zm-.49 11.3a.51.51 0 0 1 .36-.61l1.79-.48c.26-.08.53.08.6.35.07.27-.1.54-.36.62l-1.78.48a.49.49 0 0 1-.6-.35Z";
   var pathdfilled = "M15.37 2.93a.5.5 0 1 1 .5-.86 4.25 4.25 0 0 1 1.63 5.66.5.5 0 0 1-.88-.47 3.25 3.25 0 0 0-1.25-4.33Zm-1 1.74a.5.5 0 1 1 .5-.87c1.02.59 1.4 1.86.91 2.9a.5.5 0 0 1-.9-.42c.27-.58.06-1.29-.5-1.61Zm-9.74 12.4a.5.5 0 1 1-.5.86 4.25 4.25 0 0 1-1.63-5.66.5.5 0 1 1 .88.46 3.25 3.25 0 0 0 1.25 4.33Zm1-1.74a.5.5 0 1 1-.5.87 2.25 2.25 0 0 1-.92-2.9.5.5 0 0 1 .9.42c-.26.58-.05 1.28.52 1.61Zm4.54-12.26a1.95 1.95 0 0 1 2.4 1.4l2.37 8.97a2.04 2.04 0 0 1-1.42 2.48l-3.69 1a1.95 1.95 0 0 1-2.4-1.4L5.08 6.57a2.04 2.04 0 0 1 1.42-2.49l3.68-1Zm-.49 11.3c.07.27.34.43.6.36l1.79-.48a.51.51 0 0 0 .36-.62.49.49 0 0 0-.6-.36l-1.78.49a.51.51 0 0 0-.37.62Z";
   
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